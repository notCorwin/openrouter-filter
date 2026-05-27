// ── HTML escape ───────────────────────────────────────────────────
function esc(s) {
  return String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
}

// ── Price & formatting utilities ───────────────────────────────────
// Converts per-token pricing string (e.g. "0.000001") to per-million-tokens dollars.
// OpenRouter API returns per-token prices; this normalises them for display.
function pricePerMillion(s) {
  if (!s || s === '-1') return null;
  if (!s.includes('.')) return Math.max(parseInt(s, 10) * 1000000, 0);
  const [int, frac] = s.split('.');
  const digits = int.replace(/^0+/, '') + frac;
  const shift = 6 - frac.length;
  if (shift >= 0) return Math.max(parseInt(digits + '0'.repeat(shift), 10), 0);
  return Math.max(parseInt(digits, 10) / Math.pow(10, -shift), 0);
}

function round2(n) { return Math.round(n * 100) / 100; }

function fmtPrice(n) {
  if (n === 0) return '0';
  let s = n.toString();
  if (/e/.test(s)) {
    const m = s.match(/e[+-](\d+)/);
    if (m) s = n.toFixed(Math.min(parseInt(m[1]) + 2, 10)).replace(/\.?0+$/, '');
  }
  return s;
}

function fmtCtx(n) {
  if (n == null) return '-';
  if (n === 0) return '0';
  if (n >= 1000000) {
    let s = (n / 1000000).toString();
    if (/e/.test(s)) s = (n / 1000000).toFixed(6).replace(/\.?0+$/, '');
    return s + 'M';
  }
  if (n >= 1000) {
    let s = (n / 1000).toString();
    if (/e/.test(s)) s = (n / 1000).toFixed(4).replace(/\.?0+$/, '');
    return s + 'K';
  }
  return String(n);
}

// ── Count display ──────────────────────────────────────────────────
function updateCounts() {
  dom.totalCount.textContent = `(${allModels.length} ${t.models})`;
}