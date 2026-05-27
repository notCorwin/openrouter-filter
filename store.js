// ── State ──────────────────────────────────────────────────────────
let allModels = [];
let sortField = 'completion';
let sortDir = 1;

// ── DOM refs (cached once) ────────────────────────────────────────
const dom = {};
function cacheDom() {
  const ids = [
    'langSelect', 'ctxMin', 'ctxMax', 'inPriceMin', 'inPriceMax',
    'outPriceMin', 'outPriceMax', 'inText', 'outText', 'showOpenRouter',
    'paramsBody', 'paramCount', 'count', 'totalCount', 'tbody',
  ];
  ids.forEach(id => dom[id] = document.getElementById(id));
  dom.thead = document.querySelector('thead');
}