// ── Filter ─────────────────────────────────────────────────────────
function applyFilter() {
  const ctxMin   = +dom.ctxMin.value;
  const ctxMax   = +dom.ctxMax.value;
  const inMin    = +dom.inPriceMin.value;
  const inMax    = +dom.inPriceMax.value;
  const outMin   = +dom.outPriceMin.value;
  const outMax   = +dom.outPriceMax.value;
  const showOR   = dom.showOpenRouter.checked;
  const needIn   = dom.inText.checked;
  const needOut  = dom.outText.checked;
  const checkedParams = [...document.querySelectorAll('.param-cb:checked')].map(el => el.value);

  const filtered = allModels.filter(m => {
    if (!showOR && m.id.startsWith('openrouter/')) return false;

    const inputMods  = m.architecture?.input_modalities  || m.input_modalities  || [];
    const outputMods = m.architecture?.output_modalities || m.output_modalities || [];
    if (needIn  && !inputMods.includes('text'))  return false;
    if (needOut && !outputMods.includes('text')) return false;

    const modelParams = m.supported_parameters || [];
    if (checkedParams.length > 0) {
      for (const p of checkedParams) {
        if (!modelParams.includes(p)) return false;
      }
    }

    const ctx = m.context_length;
    if (ctx != null) {
      if (ctx < ctxMin) return false;
      if (ctxMax !== Infinity && ctx > ctxMax) return false;
    }

    const pPrompt = pricePerMillion((m.pricing || {}).prompt);
    const pComp   = pricePerMillion((m.pricing || {}).completion);

    if (pPrompt !== null) {
      if (pPrompt < inMin) return false;
      if (inMax !== Infinity && pPrompt > inMax) return false;
    }
    if (pComp !== null) {
      if (pComp < outMin) return false;
      if (outMax !== Infinity && pComp > outMax) return false;
    }

    return true;
  });

  dom.count.textContent = filtered.length;
  renderTable(sortFiltered(filtered));
}

// ── Sort ───────────────────────────────────────────────────────────
function sortFiltered(list) {
  return list.slice().sort((a, b) => {
    let va, vb;
    switch (sortField) {
      case 'name':      va = a.name;                 vb = b.name;                 break;
      case 'id':        va = a.id;                   vb = b.id;                   break;
      case 'context':   va = a.context_length;       vb = b.context_length;       break;
      case 'prompt':    va = pricePerMillion((a.pricing||{}).prompt); vb = pricePerMillion((b.pricing||{}).prompt); break;
      case 'completion':va = pricePerMillion((a.pricing||{}).completion); vb = pricePerMillion((b.pricing||{}).completion); break;
      case 'maxOutput': va = a.top_provider?.max_completion_tokens ?? 0;
                         vb = b.top_provider?.max_completion_tokens ?? 0; break;
    }
    if (typeof va === 'string') return sortDir * va.localeCompare(vb);
    if (va == null) va = Infinity;
    if (vb == null) vb = Infinity;
    return sortDir * (va - vb);
  });
}

function sortBy(field) {
  if (sortField === field) sortDir = -sortDir;
  else { sortField = field; sortDir = 1; }

  document.querySelectorAll('th .sort').forEach(el => el.classList.remove('active'));
  const el = document.getElementById('s-' + field);
  if (el) {
    el.classList.add('active');
    el.textContent = sortDir === 1 ? '▲' : '▼';
  }
  applyFilter();
}

// ── Table ──────────────────────────────────────────────────────────
function renderTable(filtered) {
  const tbody = dom.tbody;
  const rows = filtered.map(m => {
    const pPrompt = pricePerMillion((m.pricing||{}).prompt);
    const pComp   = pricePerMillion((m.pricing||{}).completion);
    const promptStr = pPrompt === 0 ? `<span class="free">${esc(t.free)}</span>`
                     : pPrompt === null ? '<span style="color:#888">--</span>'
                     : '$' + fmtPrice(pPrompt);
    const compStr  = pComp === 0 ? `<span class="free">${esc(t.free)}</span>`
                     : pComp === null ? '<span style="color:#888">--</span>'
                     : '$' + fmtPrice(pComp);
    return `<tr>
      <td>${esc(m.name)}</td>
      <td class="id-cell" title="${esc(m.id)}">${esc(m.id)}</td>
      <td class="context">${fmtCtx(m.context_length)}</td>
      <td class="price">${promptStr}</td>
      <td class="price">${compStr}</td>
      <td class="context">${fmtCtx(m.top_provider?.max_completion_tokens)}</td>
    </tr>`;
  });
  tbody.innerHTML = rows.join('');
}

// ── Select builders ────────────────────────────────────────────────
function buildContextSelects() {
  const ctxSet = new Set(allModels.map(m => m.context_length).filter(Boolean));
  const ctxSorted = [...ctxSet].sort((a, b) => a - b);
  const unlimitedText = esc(t.unlimited);
  const opts = ctxSorted.map(n => `<option value="${n}">${fmtCtx(n)}</option>`).join('');

  dom.ctxMin.innerHTML = `<option value="0">${unlimitedText}</option>` + opts;
  dom.ctxMax.innerHTML = opts + `<option value="Infinity">${unlimitedText}</option>`;

  const def = ctxSorted.find(n => n >= 256000) || ctxSorted[Math.floor(ctxSorted.length / 2)];
  dom.ctxMin.value = def;
  dom.ctxMax.value = 'Infinity';
}

function buildPriceSelects() {
  const rawPrices = [];
  allModels.forEach(m => {
    const pp = pricePerMillion((m.pricing||{}).prompt);
    const pc = pricePerMillion((m.pricing||{}).completion);
    if (pp !== null) rawPrices.push(pp);
    if (pc !== null) rawPrices.push(pc);
  });
  const deduped = [...new Set(rawPrices.map(n => round2(n)))].sort((a, b) => a - b);
  const makeOpt = n => `<option value="${n}">$${fmtPrice(n)}/M</option>`;
  const opts = deduped.map(makeOpt).join('');
  const hasFree = deduped.includes(0);
  const minOpt = hasFree ? opts : makeOpt(0) + opts;
  const unlimitedText = esc(t.unlimited);

  ['inPriceMin', 'outPriceMin'].forEach(id => dom[id].innerHTML = minOpt);
  ['inPriceMax', 'outPriceMax'].forEach(id => dom[id].innerHTML = opts + `<option value="Infinity">${unlimitedText}</option>`);

  const firstPaid = deduped.find(n => n > 0) || 0;
  dom.inPriceMin.value  = firstPaid;
  dom.outPriceMin.value = firstPaid;
  dom.inPriceMax.value  = 'Infinity';
  dom.outPriceMax.value = 'Infinity';
}

function buildParamCheckboxes() {
  const allParams = new Set();
  allModels.forEach(m => (m.supported_parameters || []).forEach(p => allParams.add(p)));
  const sorted = [...allParams].sort();

  dom.paramsBody.innerHTML = sorted.map(p =>
    `<label><input type="checkbox" class="param-cb" value="${esc(p)}"${p === 'tools' ? ' checked' : ''}> ${esc(p)}</label>`
  ).join('');

  dom.paramCount.textContent = `(${sorted.length})`;
}

function toggleAllParams(checked) {
  document.querySelectorAll('.param-cb').forEach(el => el.checked = checked);
  applyFilter();
}

// ── Event binding ──────────────────────────────────────────────────
function bindEvents() {
  dom.langSelect.addEventListener('change', () => switchLang(dom.langSelect.value));

  ['ctxMin', 'ctxMax', 'inPriceMin', 'inPriceMax', 'outPriceMin', 'outPriceMax']
    .forEach(id => dom[id].addEventListener('change', applyFilter));

  dom.inText.addEventListener('change', applyFilter);
  dom.outText.addEventListener('change', applyFilter);
  dom.showOpenRouter.addEventListener('change', applyFilter);

  dom.thead.addEventListener('click', e => {
    const th = e.target.closest('th[data-sort]');
    if (!th) return;
    sortBy(th.dataset.sort);
  });

  // Delegate change events for dynamically-built parameter checkboxes
  dom.paramsBody.addEventListener('change', applyFilter);
}

// ── Init ───────────────────────────────────────────────────────────
async function load() {
  try {
    const r  = await fetch('https://openrouter.ai/api/v1/models');
    const j  = await r.json();
    allModels = j.data || j;

    cacheDom();
    updateCounts();
    buildContextSelects();
    buildPriceSelects();
    buildParamCheckboxes();
    bindEvents();
    applyI18n();
  } catch (e) {
    dom.tbody.innerHTML = `<tr><td colspan="6" class="error">${t.loadFailed}: ${esc(e.message)}</td></tr>`;
  }
}

load();