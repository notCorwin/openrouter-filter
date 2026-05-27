// ── Locales ───────────────────────────────────────────────────────
const LOCALES = {
  en: 'English',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  ja: '日本語',
  ko: '한국어',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  pt: 'Português',
  ru: 'Русский',
  ar: 'العربية',
  vi: 'Tiếng Việt',
  th: 'ไทย',
  it: 'Italiano',
  tr: 'Türkçe',
  nl: 'Nederlands',
  pl: 'Polski',
  uk: 'Українська',
};

const DEFAULT_LOCALE = 'en';

// ── Translation table ─────────────────────────────────────────────
const I18N = {
  en: {
    title: 'OpenRouter Model Filter',
    contextLabel: 'Context',
    inPriceLabel: 'Input price',
    outPriceLabel: 'Output price',
    modalityLabel: 'Modality',
    inText: 'Input text',
    outText: 'Output text',
    showOpenRouter: 'Show OpenRouter native',
    paramsLabel: 'Supported params',
    selectAll: 'Select all',
    clearAll: 'Clear',
    matched: 'Matched',
    models: 'models',
    loading: 'Loading...',
    unlimited: 'Unlimited',
    free: 'Free',
    colName: 'Name',
    colContext: 'Context',
    colInputPrice: 'Input price',
    colOutputPrice: 'Output price',
    colMaxOutput: 'Max Output',
    loadFailed: 'Load failed',
  },
  'zh-CN': {
    title: 'OpenRouter 模型筛选',
    contextLabel: '上下文',
    inPriceLabel: '输入价格',
    outPriceLabel: '输出价格',
    modalityLabel: '模态',
    inText: '输入含 text',
    outText: '输出含 text',
    showOpenRouter: '显示 OpenRouter 原生',
    paramsLabel: '支持的参数',
    selectAll: '全选',
    clearAll: '清空',
    matched: '匹配',
    models: '个模型',
    loading: '加载中...',
    unlimited: '不限',
    free: '免费',
    colName: '名称',
    colContext: '上下文',
    colInputPrice: '输入价格',
    colOutputPrice: '输出价格',
    colMaxOutput: '最大输出',
    loadFailed: '加载失败',
  },
  'zh-TW': {
    title: 'OpenRouter 模型篩選',
    contextLabel: '上下文',
    inPriceLabel: '輸入價格',
    outPriceLabel: '輸出價格',
    modalityLabel: '模態',
    inText: '輸入含 text',
    outText: '輸出含 text',
    showOpenRouter: '顯示 OpenRouter 原生',
    paramsLabel: '支援的參數',
    selectAll: '全選',
    clearAll: '清除',
    matched: '符合',
    models: '個模型',
    loading: '載入中...',
    unlimited: '不限',
    free: '免費',
    colName: '名稱',
    colContext: '上下文',
    colInputPrice: '輸入價格',
    colOutputPrice: '輸出價格',
    colMaxOutput: '最大輸出',
    loadFailed: '載入失敗',
  },
  ja: {
    title: 'OpenRouter モデルフィルター',
    contextLabel: 'コンテキスト',
    inPriceLabel: '入力価格',
    outPriceLabel: '出力価格',
    modalityLabel: 'モダリティ',
    inText: '入力にテキスト',
    outText: '出力にテキスト',
    showOpenRouter: 'OpenRouterネイティブを表示',
    paramsLabel: 'サポートパラメータ',
    selectAll: 'すべて選択',
    clearAll: 'クリア',
    matched: '一致',
    models: 'モデル',
    loading: '読み込み中...',
    unlimited: '無制限',
    free: '無料',
    colName: '名前',
    colContext: 'コンテキスト',
    colInputPrice: '入力価格',
    colOutputPrice: '出力価格',
    colMaxOutput: '最大出力',
    loadFailed: '読み込み失敗',
  },
  ko: {
    title: 'OpenRouter 모델 필터',
    contextLabel: '컨텍스트',
    inPriceLabel: '입력 가격',
    outPriceLabel: '출력 가격',
    modalityLabel: '모달리티',
    inText: '입력 텍스트',
    outText: '출력 텍스트',
    showOpenRouter: 'OpenRouter 네이티브 표시',
    paramsLabel: '지원 파라미터',
    selectAll: '모두 선택',
    clearAll: '선택 해제',
    matched: '일치',
    models: '개 모델',
    loading: '불러오는 중...',
    unlimited: '무제한',
    free: '무료',
    colName: '이름',
    colContext: '컨텍스트',
    colInputPrice: '입력 가격',
    colOutputPrice: '출력 가격',
    colMaxOutput: '최대 출력',
    loadFailed: '불러오기 실패',
  },
  fr: {
    title: 'Filtre de modèles OpenRouter',
    contextLabel: 'Contexte',
    inPriceLabel: 'Prix entrée',
    outPriceLabel: 'Prix sortie',
    modalityLabel: 'Modalité',
    inText: 'Texte entrée',
    outText: 'Texte sortie',
    showOpenRouter: 'Afficher natifs OpenRouter',
    paramsLabel: 'Paramètres supportés',
    selectAll: 'Tout sélectionner',
    clearAll: 'Effacer',
    matched: 'Correspondants',
    models: 'modèles',
    loading: 'Chargement...',
    unlimited: 'Illimité',
    free: 'Gratuit',
    colName: 'Nom',
    colContext: 'Contexte',
    colInputPrice: 'Prix entrée',
    colOutputPrice: 'Prix sortie',
    colMaxOutput: 'Sortie max',
    loadFailed: 'Échec du chargement',
  },
  de: {
    title: 'OpenRouter Modellfilter',
    contextLabel: 'Kontext',
    inPriceLabel: 'Eingabepreis',
    outPriceLabel: 'Ausgabepreis',
    modalityLabel: 'Modalität',
    inText: 'Eingabe Text',
    outText: 'Ausgabe Text',
    showOpenRouter: 'OpenRouter-nativ anzeigen',
    paramsLabel: 'Unterstützte Parameter',
    selectAll: 'Alle auswählen',
    clearAll: 'Leeren',
    matched: 'Übereinstimmungen',
    models: 'Modelle',
    loading: 'Laden...',
    unlimited: 'Unbegrenzt',
    free: 'Kostenlos',
    colName: 'Name',
    colContext: 'Kontext',
    colInputPrice: 'Eingabepreis',
    colOutputPrice: 'Ausgabepreis',
    colMaxOutput: 'Max Ausgabe',
    loadFailed: 'Laden fehlgeschlagen',
  },
  es: {
    title: 'Filtro de modelos OpenRouter',
    contextLabel: 'Contexto',
    inPriceLabel: 'Precio entrada',
    outPriceLabel: 'Precio salida',
    modalityLabel: 'Modalidad',
    inText: 'Texto entrada',
    outText: 'Texto salida',
    showOpenRouter: 'Mostrar nativos OpenRouter',
    paramsLabel: 'Parámetros soportados',
    selectAll: 'Seleccionar todo',
    clearAll: 'Limpiar',
    matched: 'Coincidencias',
    models: 'modelos',
    loading: 'Cargando...',
    unlimited: 'Ilimitado',
    free: 'Gratis',
    colName: 'Nombre',
    colContext: 'Contexto',
    colInputPrice: 'Precio entrada',
    colOutputPrice: 'Precio salida',
    colMaxOutput: 'Salida máx',
    loadFailed: 'Error al cargar',
  },
  pt: {
    title: 'Filtro de modelos OpenRouter',
    contextLabel: 'Contexto',
    inPriceLabel: 'Preço entrada',
    outPriceLabel: 'Preço saída',
    modalityLabel: 'Modalidade',
    inText: 'Texto entrada',
    outText: 'Texto saída',
    showOpenRouter: 'Mostrar nativos OpenRouter',
    paramsLabel: 'Parâmetros suportados',
    selectAll: 'Selecionar tudo',
    clearAll: 'Limpar',
    matched: 'Correspondentes',
    models: 'modelos',
    loading: 'Carregando...',
    unlimited: 'Ilimitado',
    free: 'Grátis',
    colName: 'Nome',
    colContext: 'Contexto',
    colInputPrice: 'Preço entrada',
    colOutputPrice: 'Preço saída',
    colMaxOutput: 'Saída máx',
    loadFailed: 'Falha ao carregar',
  },
  ru: {
    title: 'Фильтр моделей OpenRouter',
    contextLabel: 'Контекст',
    inPriceLabel: 'Цена ввода',
    outPriceLabel: 'Цена вывода',
    modalityLabel: 'Модальность',
    inText: 'Ввод текста',
    outText: 'Вывод текста',
    showOpenRouter: 'Показать нативные OpenRouter',
    paramsLabel: 'Поддерживаемые параметры',
    selectAll: 'Выбрать все',
    clearAll: 'Очистить',
    matched: 'Совпадений',
    models: 'моделей',
    loading: 'Загрузка...',
    unlimited: 'Безлимитно',
    free: 'Бесплатно',
    colName: 'Название',
    colContext: 'Контекст',
    colInputPrice: 'Цена ввода',
    colOutputPrice: 'Цена вывода',
    colMaxOutput: 'Макс вывод',
    loadFailed: 'Ошибка загрузки',
  },
  ar: {
    title: 'فلترة نماذج OpenRouter',
    contextLabel: 'السياق',
    inPriceLabel: 'سعر الإدخال',
    outPriceLabel: 'سعر الإخراج',
    modalityLabel: 'الطريقة',
    inText: 'إدخال نص',
    outText: 'إخراج نص',
    showOpenRouter: 'إظهار النماذج الأصلية',
    paramsLabel: 'المعلمات المدعومة',
    selectAll: 'تحديد الكل',
    clearAll: 'مسح',
    matched: 'المطابقة',
    models: 'نموذج',
    loading: 'جارٍ التحميل...',
    unlimited: 'غير محدود',
    free: 'مجاني',
    colName: 'الاسم',
    colContext: 'السياق',
    colInputPrice: 'سعر الإدخال',
    colOutputPrice: 'سعر الإخراج',
    colMaxOutput: 'أقصى إخراج',
    loadFailed: 'فشل التحميل',
  },
  vi: {
    title: 'Bộ lọc mô hình OpenRouter',
    contextLabel: 'Ngữ cảnh',
    inPriceLabel: 'Giá đầu vào',
    outPriceLabel: 'Giá đầu ra',
    modalityLabel: 'Phương thức',
    inText: 'Văn bản đầu vào',
    outText: 'Văn bản đầu ra',
    showOpenRouter: 'Hiển thị gốc OpenRouter',
    paramsLabel: 'Tham số hỗ trợ',
    selectAll: 'Chọn tất cả',
    clearAll: 'Xóa',
    matched: 'Khớp',
    models: 'mô hình',
    loading: 'Đang tải...',
    unlimited: 'Không giới hạn',
    free: 'Miễn phí',
    colName: 'Tên',
    colContext: 'Ngữ cảnh',
    colInputPrice: 'Giá đầu vào',
    colOutputPrice: 'Giá đầu ra',
    colMaxOutput: 'Đầu ra tối đa',
    loadFailed: 'Tải thất bại',
  },
  th: {
    title: 'ตัวกรองโมเดล OpenRouter',
    contextLabel: 'บริบท',
    inPriceLabel: 'ราคาขาเข้า',
    outPriceLabel: 'ราคาขาออก',
    modalityLabel: 'รูปแบบ',
    inText: 'ข้อความเข้า',
    outText: 'ข้อความออก',
    showOpenRouter: 'แสดง OpenRouter พื้นเมือง',
    paramsLabel: 'พารามิเตอร์ที่รองรับ',
    selectAll: 'เลือกทั้งหมด',
    clearAll: 'ล้าง',
    matched: 'ที่ตรงกัน',
    models: 'โมเดล',
    loading: 'กำลังโหลด...',
    unlimited: 'ไม่จำกัด',
    free: 'ฟรี',
    colName: 'ชื่อ',
    colContext: 'บริบท',
    colInputPrice: 'ราคาขาเข้า',
    colOutputPrice: 'ราคาขาออก',
    colMaxOutput: 'เอาต์พุตสูงสุด',
    loadFailed: 'โหลดล้มเหลว',
  },
  it: {
    title: 'Filtro modelli OpenRouter',
    contextLabel: 'Contesto',
    inPriceLabel: 'Prezzo input',
    outPriceLabel: 'Prezzo output',
    modalityLabel: 'Modalità',
    inText: 'Testo input',
    outText: 'Testo output',
    showOpenRouter: 'Mostra nativi OpenRouter',
    paramsLabel: 'Parametri supportati',
    selectAll: 'Seleziona tutto',
    clearAll: 'Cancella',
    matched: 'Corrispondenze',
    models: 'modelli',
    loading: 'Caricamento...',
    unlimited: 'Illimitato',
    free: 'Gratuito',
    colName: 'Nome',
    colContext: 'Contesto',
    colInputPrice: 'Prezzo input',
    colOutputPrice: 'Prezzo output',
    colMaxOutput: 'Output max',
    loadFailed: 'Caricamento fallito',
  },
  tr: {
    title: 'OpenRouter Model Filtresi',
    contextLabel: 'Bağlam',
    inPriceLabel: 'Giriş fiyatı',
    outPriceLabel: 'Çıkış fiyatı',
    modalityLabel: 'Modalite',
    inText: 'Giriş metni',
    outText: 'Çıkış metni',
    showOpenRouter: 'OpenRouter yerli göster',
    paramsLabel: 'Desteklenen parametreler',
    selectAll: 'Tümünü seç',
    clearAll: 'Temizle',
    matched: 'Eşleşen',
    models: 'model',
    loading: 'Yükleniyor...',
    unlimited: 'Sınırsız',
    free: 'Ücretsiz',
    colName: 'Ad',
    colContext: 'Bağlam',
    colInputPrice: 'Giriş fiyatı',
    colOutputPrice: 'Çıkış fiyatı',
    colMaxOutput: 'Maks çıktı',
    loadFailed: 'Yükleme başarısız',
  },
  nl: {
    title: 'OpenRouter modelfilter',
    contextLabel: 'Context',
    inPriceLabel: 'Invoerprijs',
    outPriceLabel: 'Uitvoerprijs',
    modalityLabel: 'Modaliteit',
    inText: 'Invoer tekst',
    outText: 'Uitvoer tekst',
    showOpenRouter: 'OpenRouter-natief tonen',
    paramsLabel: 'Ondersteunde parameters',
    selectAll: 'Alles selecteren',
    clearAll: 'Wissen',
    matched: 'Overeenkomsten',
    models: 'modellen',
    loading: 'Laden...',
    unlimited: 'Onbeperkt',
    free: 'Gratis',
    colName: 'Naam',
    colContext: 'Context',
    colInputPrice: 'Invoerprijs',
    colOutputPrice: 'Uitvoerprijs',
    colMaxOutput: 'Max uitvoer',
    loadFailed: 'Laden mislukt',
  },
  pl: {
    title: 'Filtr modeli OpenRouter',
    contextLabel: 'Kontekst',
    inPriceLabel: 'Cena wejścia',
    outPriceLabel: 'Cena wyjścia',
    modalityLabel: 'Modalność',
    inText: 'Tekst wejściowy',
    outText: 'Tekst wyjściowy',
    showOpenRouter: 'Pokaż natywne OpenRouter',
    paramsLabel: 'Obsługiwane parametry',
    selectAll: 'Zaznacz wszystko',
    clearAll: 'Wyczyść',
    matched: 'Dopasowano',
    models: 'modeli',
    loading: 'Ładowanie...',
    unlimited: 'Bez ograniczeń',
    free: 'Darmowy',
    colName: 'Nazwa',
    colContext: 'Kontekst',
    colInputPrice: 'Cena wejścia',
    colOutputPrice: 'Cena wyjścia',
    colMaxOutput: 'Maks wyjście',
    loadFailed: 'Błąd ładowania',
  },
  uk: {
    title: 'Фільтр моделей OpenRouter',
    contextLabel: 'Контекст',
    inPriceLabel: 'Ціна введення',
    outPriceLabel: 'Ціна виведення',
    modalityLabel: 'Модальність',
    inText: 'Введення тексту',
    outText: 'Виведення тексту',
    showOpenRouter: 'Показати нативні OpenRouter',
    paramsLabel: 'Підтримувані параметри',
    selectAll: 'Вибрати все',
    clearAll: 'Очистити',
    matched: 'Збігів',
    models: 'моделей',
    loading: 'Завантаження...',
    unlimited: 'Безлімітно',
    free: 'Безкоштовно',
    colName: 'Назва',
    colContext: 'Контекст',
    colInputPrice: 'Ціна введення',
    colOutputPrice: 'Ціна виведення',
    colMaxOutput: 'Макс виведення',
    loadFailed: 'Помилка завантаження',
  },
};

// ── Safe localStorage helpers ──────────────────────────────────────
function getStoredLang() {
  try { return localStorage.getItem('or_filter_lang'); } catch { return null; }
}
function setStoredLang(code) {
  try { localStorage.setItem('or_filter_lang', code); } catch { /* noop */ }
}

// ── Locale resolution ─────────────────────────────────────────────
function detectLocale() {
  const stored = getStoredLang();
  if (stored && I18N[stored]) return stored;

  const langs = navigator.languages || [navigator.language || DEFAULT_LOCALE];
  for (const raw of langs) {
    const lang = raw.replace(/_/g, '-');
    if (I18N[lang]) return lang;
    const prefix = lang.split('-')[0];
    const candidates = Object.keys(I18N).filter(k => k.startsWith(prefix + '-') || k === prefix);
    if (candidates.length > 0) return candidates[0];
  }
  return DEFAULT_LOCALE;
}

let LOCALE = detectLocale();
let t = I18N[LOCALE] || I18N[DEFAULT_LOCALE];

// ── State ─────────────────────────────────────────────────────────
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
  dom.langSelect = document.getElementById('langSelect');
  dom.thead = document.querySelector('thead');
}

// ── i18n ───────────────────────────────────────────────────────────
function esc(s) {
  return String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  const html = document.documentElement;
  html.lang = LOCALE;
  html.dir = ['ar'].includes(LOCALE) ? 'rtl' : 'ltr';

  dom.langSelect.innerHTML = Object.keys(LOCALES).map(code =>
    `<option value="${code}"${code === LOCALE ? ' selected' : ''}>${LOCALES[code]}</option>`
  ).join('');

  document.title = t.title || 'OpenRouter Model Filter';

  // Refresh dynamic content if models already loaded
  if (allModels.length > 0) {
    updateCounts();
    buildContextSelects();
    buildPriceSelects();
    applyFilter();
  }
}

function switchLang(code) {
  if (!I18N[code]) return;
  LOCALE = code;
  t = I18N[code];
  setStoredLang(code);
  applyI18n();
}

// ── Helpers ────────────────────────────────────────────────────────
function pricePerMillion(s) {
  if (s === '-1') return null; // unknown / promotional
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

// ── Counts ─────────────────────────────────────────────────────────
function updateCounts() {
  dom.totalCount.textContent = `(${allModels.length} ${t.models})`;
}

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
    // --- OpenRouter native toggle ---
    if (!showOR && m.id.startsWith('openrouter/')) return false;

    // --- Modality check (always applied) ---
    const inputMods  = m.architecture?.input_modalities  || m.input_modalities  || [];
    const outputMods = m.architecture?.output_modalities || m.output_modalities || [];
    if (needIn  && !inputMods.includes('text'))  return false;
    if (needOut && !outputMods.includes('text')) return false;

    // --- Parameter check ---
    const modelParams = m.supported_parameters || [];
    if (checkedParams.length > 0) {
      for (const p of checkedParams) {
        if (!modelParams.includes(p)) return false;
      }
    }

    // --- Context range ---
    const ctx = m.context_length;
    if (ctx != null) {
      if (ctx < ctxMin) return false;
      if (ctxMax !== Infinity && ctx > ctxMax) return false;
    }

    // --- Price range ---
    const pPrompt = pricePerMillion(m.pricing.prompt);
    const pComp   = pricePerMillion(m.pricing.completion);

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
      case 'prompt':    va = pricePerMillion(a.pricing.prompt); vb = pricePerMillion(b.pricing.prompt); break;
      case 'completion':va = pricePerMillion(a.pricing.completion); vb = pricePerMillion(b.pricing.completion); break;
      case 'maxOutput': va = a.top_provider?.max_completion_tokens ?? 0;
                         vb = b.top_provider?.max_completion_tokens ?? 0; break;
    }
    if (typeof va === 'string') return sortDir * va.localeCompare(vb);
    // nulls last
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
    const pPrompt = pricePerMillion(m.pricing.prompt);
    const pComp   = pricePerMillion(m.pricing.completion);
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
    const pp = pricePerMillion(m.pricing.prompt);
    const pc = pricePerMillion(m.pricing.completion);
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

// ── Event binding (single source) ─────────────────────────────────
function bindEvents() {
  dom.langSelect.addEventListener('change', () => switchLang(dom.langSelect.value));

  // Filters → apply
  ['ctxMin', 'ctxMax', 'inPriceMin', 'inPriceMax', 'outPriceMin', 'outPriceMax']
    .forEach(id => dom[id].addEventListener('change', applyFilter));

  dom.inText.addEventListener('change', applyFilter);
  dom.outText.addEventListener('change', applyFilter);
  dom.showOpenRouter.addEventListener('change', applyFilter);

  // Sort headers (delegated)
  dom.thead.addEventListener('click', e => {
    const th = e.target.closest('th[data-sort]');
    if (!th) return;
    sortBy(th.dataset.sort);
  });
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
    applyI18n();          // applies locale + triggers first filter
    dom.count.textContent = allModels.length; // show total before first filter
  } catch (e) {
    dom.tbody.innerHTML = `<tr><td colspan="6" class="error">${t.loadFailed}: ${esc(e.message)}</td></tr>`;
  }
}

load();