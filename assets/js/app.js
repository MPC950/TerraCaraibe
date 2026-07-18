
const units = [
  { id: "hectare", m2: 10000, en: "Hectares", fr: "Hectares", enAbbr: "ha", frAbbr: "ha" },
  { id: "acre", m2: 4046.8564224, en: "Acres", fr: "Acres", enAbbr: "ac", frAbbr: "ac" },
  { id: "squareMeter", m2: 1, en: "Square meters", fr: "Mètres carrés", enAbbr: "m²", frAbbr: "m²" },
  { id: "squareKilometer", m2: 1000000, en: "Square kilometers", fr: "Kilomètres carrés", enAbbr: "km²", frAbbr: "km²" },
  { id: "squareMile", m2: 2589988.110336, en: "Square miles", fr: "Milles carrés", enAbbr: "sq mi", frAbbr: "mi²" },
  { id: "squareFoot", m2: 0.09290304, en: "Square feet", fr: "Pieds carrés", enAbbr: "sq ft", frAbbr: "pi²" },
  { id: "squareYard", m2: 0.83612736, en: "Square yards", fr: "Verges carrées", enAbbr: "sq yd", frAbbr: "vg²" },
  { id: "carreau", m2: 12900, en: "Carreaux (Haiti)", fr: "Carreaux (Haïti)", enAbbr: "car.", frAbbr: "car." },
  { id: "centieme", m2: 129, en: "Centièmes (Haiti)", fr: "Centièmes (Haïti)", enAbbr: "ctme", frAbbr: "ctme" },
  { id: "seizieme", m2: 806.25, en: "Seizièmes (Haiti)", fr: "Seizièmes (Haïti)", enAbbr: "seiz.", frAbbr: "seiz." },
  { id: "tarea", m2: 628.8, en: "Tareas (Dominican Rep.)", fr: "Tareas (Rép. dominicaine)", enAbbr: "ta", frAbbr: "ta" }
];

const currencies = {
  HGD: { symbol: "H$", en: "Haitian dollars", fr: "Dollars haïtiens" },
  HTG: { symbol: "HTG", en: "Gourdes", fr: "Gourdes" },
  USD: { symbol: "US$", en: "U.S. dollars", fr: "Dollars américains" }
};

const EXCHANGE_API_URL = "https://open.er-api.com/v6/latest/USD";
const RATE_CACHE_KEY = "usd-htg-rate-cache";
const DEFAULT_USD_HTG_RATE = 132;

const translations = {
  en: {
    landTools: "Land tools",
    platformLabel: "Caribbean land platform",
    workspace: "Workspace",
    areaConverter: "Area converter",
    landValuation: "Land valuation",
    conversionReference: "Conversion reference",
    unitDefinitions: "Unit definitions",
    comingNext: "Coming next",
    parcelPlanner: "Parcel planner",
    plantationTools: "Plantation tools",
    reports: "Reports",
    soon: "Soon",
    dashboardTitle: "Land workspace",
    navConvert: "Convert", navValue: "Value", navReference: "Reference", navUnits: "Units",
    offlineCapable: "Offline capable",
    welcomeEyebrow: "TerraCaraïbe workspace",
    welcomeTitle: "Convert and value Caribbean land",
    welcomeText: "Work with international, Haitian, and Dominican land units in one bilingual workspace.",
    supportedUnits: "Supported units",
    title: "TerraCaraïbe",
    converter: "Converter",
    amount: "Amount",
    clear: "Clear",
    decimalHelp: "Use a period or comma for decimals.",
    from: "From",
    to: "To",
    result: "Result",
    copy: "Copy result",
    copied: "Copied",
    invalid: "Enter a valid number",
    reference: "Reference",
    allConversions: "All conversions",
    precision: "Precision",
    changePrecision: "Change precision",
    definitions: "Definitions used",
    notationNote: "SI symbols are standardized. Abbreviations for traditional land units are customary and may vary between deeds and jurisdictions.",
    offlineReady: "Works offline after the first visit.",
    swap: "Swap units",
    landCost: "Land cost",
    costPerUnit: "Cost per unit",
    totalCost: "Total cost of this land",
    currency: "Currency",
    inputCurrency: "Cost entered in",
    outputCurrency: "Show results in",
    liveExchangeRate: "USD–HTG exchange rate",
    refreshRate: "Refresh",
    rateInput: "USD to HTG rate",
    loadingRate: "Loading live rate…",
    liveRateLoaded: "Live rate updated",
    cachedRate: "Using last saved rate",
    manualRate: "Using manually entered rate",
    rateUnavailable: "Live rate unavailable; using the saved or default rate",
    rateProvidedBy: "Exchange-rate data provided by",
    haitianDollarHelp: "1 Haitian dollar (H$) equals 5 gourdes. The USD conversion uses the displayed live or manually entered rate.",
    enterCost: "Enter the total land cost to calculate price per unit",
    per: "per"
  },
  fr: {
    landTools: "Outils fonciers",
    platformLabel: "Plateforme foncière caribéenne",
    workspace: "Espace de travail",
    areaConverter: "Convertisseur de superficie",
    landValuation: "Évaluation foncière",
    conversionReference: "Référence de conversion",
    unitDefinitions: "Définitions des unités",
    comingNext: "Prochainement",
    parcelPlanner: "Planificateur de parcelle",
    plantationTools: "Outils de plantation",
    reports: "Rapports",
    soon: "Bientôt",
    dashboardTitle: "Espace foncier",
    navConvert: "Convertir", navValue: "Valeur", navReference: "Référence", navUnits: "Unités",
    offlineCapable: "Disponible hors ligne",
    welcomeEyebrow: "Espace TerraCaraïbe",
    welcomeTitle: "Convertissez et évaluez les terres caribéennes",
    welcomeText: "Utilisez les unités foncières internationales, haïtiennes et dominicaines dans un espace bilingue.",
    supportedUnits: "Unités prises en charge",
    title: "TerraCaraïbe",
    converter: "Convertisseur",
    amount: "Valeur",
    clear: "Effacer",
    decimalHelp: "Utilisez un point ou une virgule pour les décimales.",
    from: "De",
    to: "Vers",
    result: "Résultat",
    copy: "Copier le résultat",
    copied: "Copié",
    invalid: "Saisissez un nombre valide",
    reference: "Référence",
    allConversions: "Toutes les conversions",
    precision: "Précision",
    changePrecision: "Modifier la précision",
    definitions: "Définitions utilisées",
    notationNote: "Les symboles SI sont normalisés. Les abréviations des unités foncières traditionnelles sont d’usage et peuvent varier selon les actes et les juridictions.",
    offlineReady: "Fonctionne hors ligne après la première visite.",
    swap: "Permuter les unités",
    landCost: "Coût foncier",
    costPerUnit: "Coût par unité",
    totalCost: "Coût total de ce terrain",
    currency: "Devise",
    inputCurrency: "Coût saisi en",
    outputCurrency: "Afficher les résultats en",
    liveExchangeRate: "Taux de change USD–HTG",
    refreshRate: "Actualiser",
    rateInput: "Taux USD vers HTG",
    loadingRate: "Chargement du taux en direct…",
    liveRateLoaded: "Taux en direct actualisé",
    cachedRate: "Dernier taux enregistré utilisé",
    manualRate: "Taux saisi manuellement utilisé",
    rateUnavailable: "Taux en direct indisponible; utilisation du taux enregistré ou par défaut",
    rateProvidedBy: "Données de change fournies par",
    haitianDollarHelp: "1 dollar haïtien (H$) équivaut à 5 gourdes. La conversion USD utilise le taux en direct affiché ou le taux saisi manuellement.",
    enterCost: "Saisissez le coût total du terrain pour calculer le prix par unité",
    per: "par"
  }
};

const els = {
  amount: document.querySelector("#amount"),
  from: document.querySelector("#fromUnit"),
  to: document.querySelector("#toUnit"),
  result: document.querySelector("#result"),
  resultUnit: document.querySelector("#resultUnit"),
  allResults: document.querySelector("#allResults"),
  languageButton: document.querySelector("#languageButton"),
  languageLabel: document.querySelector("#languageLabel"),
  swapButton: document.querySelector("#swapButton"),
  clearButton: document.querySelector("#clearButton"),
  copyButton: document.querySelector("#copyButton"),
  precisionButton: document.querySelector("#precisionButton"),
  precisionValue: document.querySelector("#precisionValue"),
  toast: document.querySelector("#toast"),
  landCost: document.querySelector("#landCostInput"),
  currency: document.querySelector("#currencyUnit"),
  costResults: document.querySelector("#costResults"),
  outputCurrency: document.querySelector("#outputCurrency"),
  exchangeRateInput: document.querySelector("#exchangeRateInput"),
  exchangeRateDisplay: document.querySelector("#exchangeRateDisplay"),
  exchangeRateStatus: document.querySelector("#exchangeRateStatus"),
  refreshRateButton: document.querySelector("#refreshRateButton"),
  bottomNavButtons: [...document.querySelectorAll(".bottom-nav-item[data-tool]")],
  toolPanels: [...document.querySelectorAll(".tool-panel")],
  workspaceTitle: document.querySelector("#workspaceTitle"),
  toolIntro: document.querySelector(".tool-intro")
};

let language = localStorage.getItem("area-language") || (navigator.language.startsWith("fr") ? "fr" : "en");
let precision = Number(localStorage.getItem("area-precision") || 4);
let toastTimer;
let usdHtgRate = DEFAULT_USD_HTG_RATE;
let rateSource = "default";
let rateUpdatedAt = null;

const TOOL_STATE_KEY = "terracaraibe-active-tool";
const toolTitleKeys = {
  conversion: "areaConverter",
  cost: "landValuation",
  reference: "conversionReference",
  definitions: "unitDefinitions"
};

function activateTool(toolId, { persist = true } = {}) {
  if (!els.toolPanels.some(panel => panel.dataset.sectionId === toolId)) toolId = "conversion";

  els.toolPanels.forEach(panel => {
    const active = panel.dataset.sectionId === toolId;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
    panel.setAttribute("aria-hidden", String(!active));
    const content = panel.querySelector(".accordion-content");
    const trigger = panel.querySelector(".accordion-trigger");
    if (content) {
      content.hidden = false;
      content.classList.add("is-open");
      content.style.height = "auto";
    }
    if (trigger) trigger.setAttribute("aria-expanded", "true");
  });

  els.bottomNavButtons.forEach(button => {
    const active = button.dataset.tool === toolId;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });

  if (els.toolIntro) els.toolIntro.hidden = toolId !== "conversion";
  if (els.workspaceTitle) {
    const key = toolTitleKeys[toolId];
    els.workspaceTitle.textContent = translations[language][key];
    els.workspaceTitle.dataset.i18n = key;
  }
  if (persist) localStorage.setItem(TOOL_STATE_KEY, toolId);
  window.scrollTo({ top: 0, behavior: "instant" });
}

function initializeToolNavigation() {
  els.bottomNavButtons.forEach(button => {
    button.addEventListener("click", () => activateTool(button.dataset.tool));
  });
  activateTool(localStorage.getItem(TOOL_STATE_KEY) || "conversion", { persist: false });
}

function parseLocalizedNumber(value) {
  const cleaned = value.trim().replace(/\s/g, "").replace(",", ".");
  if (cleaned === "") return NaN;
  const number = Number(cleaned);
  return Number.isFinite(number) ? number : NaN;
}

function formatNumber(value, maxDigits = precision) {
  if (!Number.isFinite(value)) return "—";
  const abs = Math.abs(value);
  if (abs !== 0 && (abs >= 1e12 || abs < 1e-7)) {
    return value.toExponential(Math.min(maxDigits, 8));
  }
  return new Intl.NumberFormat(language === "fr" ? "fr-FR" : "en-US", {
    maximumFractionDigits: maxDigits,
    minimumFractionDigits: 0
  }).format(value);
}

function unitName(unit) {
  return language === "fr" ? unit.fr : unit.en;
}

function unitAbbr(unit) {
  return language === "fr" ? unit.frAbbr : unit.enAbbr;
}

function currencyName(code) {
  const currency = currencies[code];
  return language === "fr" ? currency.fr : currency.en;
}

function populateCurrencySelects() {
  const selectedInput = els.currency.value || "HTG";
  const selectedOutput = els.outputCurrency.value || selectedInput;
  const markup = Object.entries(currencies).map(([code, currency]) =>
    `<option value="${code}">${currencyName(code)} (${currency.symbol})</option>`
  ).join("");
  els.currency.innerHTML = markup;
  els.outputCurrency.innerHTML = markup;
  els.currency.value = selectedInput;
  els.outputCurrency.value = selectedOutput;
}

function formatRateTimestamp(timestamp) {
  if (!timestamp) return "";
  return new Intl.DateTimeFormat(language === "fr" ? "fr-FR" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(timestamp));
}

function updateRateUI(statusKey) {
  els.exchangeRateInput.value = String(Number(usdHtgRate.toFixed(4)));
  els.exchangeRateDisplay.textContent = `1 USD = ${formatNumber(usdHtgRate, 4)} HTG`;
  const stamp = formatRateTimestamp(rateUpdatedAt);
  els.exchangeRateStatus.textContent = `${translations[language][statusKey || (rateSource === "live" ? "liveRateLoaded" : "cachedRate")]}${stamp ? ` · ${stamp}` : ""}`;
}

function loadCachedRate() {
  try {
    const cached = JSON.parse(localStorage.getItem(RATE_CACHE_KEY));
    if (cached && Number.isFinite(cached.rate) && cached.rate > 0) {
      usdHtgRate = cached.rate;
      rateUpdatedAt = cached.updatedAt || null;
      rateSource = "cache";
    }
  } catch (_) {}
  updateRateUI(rateSource === "cache" ? "cachedRate" : "rateUnavailable");
}

async function fetchLiveRate() {
  els.refreshRateButton.disabled = true;
  els.exchangeRateStatus.textContent = translations[language].loadingRate;
  try {
    const response = await fetch(EXCHANGE_API_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const rate = Number(data?.rates?.HTG);
    if (data?.result !== "success" || !Number.isFinite(rate) || rate <= 0) {
      throw new Error("Invalid exchange-rate response");
    }
    usdHtgRate = rate;
    rateUpdatedAt = data.time_last_update_unix ? data.time_last_update_unix * 1000 : Date.now();
    rateSource = "live";
    localStorage.setItem(RATE_CACHE_KEY, JSON.stringify({ rate: usdHtgRate, updatedAt: rateUpdatedAt }));
    updateRateUI("liveRateLoaded");
    calculate();
  } catch (error) {
    updateRateUI(rateSource === "cache" ? "cachedRate" : "rateUnavailable");
  } finally {
    els.refreshRateButton.disabled = false;
  }
}

function convertCurrency(value, fromCode, toCode) {
  if (!Number.isFinite(value) || !Number.isFinite(usdHtgRate) || usdHtgRate <= 0) return NaN;
  let valueInHtg;
  if (fromCode === "HTG") valueInHtg = value;
  else if (fromCode === "HGD") valueInHtg = value * 5;
  else valueInHtg = value * usdHtgRate;

  if (toCode === "HTG") return valueInHtg;
  if (toCode === "HGD") return valueInHtg / 5;
  return valueInHtg / usdHtgRate;
}

function populateUnitSelects() {
  const selectedFrom = els.from.value || "hectare";
  const selectedTo = els.to.value || "squareMeter";
  const markup = units.map(unit =>
    `<option value="${unit.id}">${unitName(unit)} (${unitAbbr(unit)})</option>`
  ).join("");
  els.from.innerHTML = markup;
  els.to.innerHTML = markup;
  els.from.value = selectedFrom;
  els.to.value = selectedTo;
}

function translateInterface() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(node => {
    node.textContent = translations[language][node.dataset.i18n];
  });
  els.languageLabel.textContent = language === "en" ? "FR" : "EN";
  els.languageButton.setAttribute(
    "aria-label",
    language === "en" ? "Passer au français" : "Switch to English"
  );
  els.swapButton.setAttribute("aria-label", translations[language].swap);
  els.swapButton.title = translations[language].swap;
  populateUnitSelects();
  populateCurrencySelects();
  updateRateUI(rateSource === "live" ? "liveRateLoaded" : rateSource === "cache" ? "cachedRate" : "rateUnavailable");
  calculate();
}

function getUnit(id) {
  return units.find(unit => unit.id === id);
}

function formatCurrency(value, currencyCode) {
  if (!Number.isFinite(value)) return "—";
  const currency = currencies[currencyCode];
  const digits = Math.abs(value) < 1 ? Math.max(precision, 4) : 2;
  return `${currency.symbol} ${formatNumber(value, digits)}`;
}

function renderCostResults(squareMeters) {
  const totalCost = parseLocalizedNumber(els.landCost.value);
  const inputCurrencyCode = els.currency.value;
  const outputCurrencyCode = els.outputCurrency.value;

  if (!Number.isFinite(totalCost) || totalCost < 0 || !Number.isFinite(squareMeters) || squareMeters <= 0) {
    els.costResults.innerHTML = `<div class="cost-empty">${translations[language].enterCost}</div>`;
    return;
  }

  els.costResults.innerHTML = units.map(unit => {
    const quantityInUnit = squareMeters / unit.m2;
    const costPerUnitEntered = totalCost / quantityInUnit;
    const costPerUnit = convertCurrency(costPerUnitEntered, inputCurrencyCode, outputCurrencyCode);
    return `
      <div class="result-row">
        <div class="result-row-name">
          ${translations[language].per} ${unitName(unit).replace(/s \(/, " (").replace(/s$/, "")}
          <span class="result-row-abbr">${unitAbbr(unit)}</span>
        </div>
        <div class="result-row-value">${formatCurrency(costPerUnit, outputCurrencyCode)}</div>
      </div>
    `;
  }).join("");
}

function calculate() {
  const amount = parseLocalizedNumber(els.amount.value);
  const from = getUnit(els.from.value);
  const to = getUnit(els.to.value);

  if (!Number.isFinite(amount)) {
    els.result.textContent = "—";
    els.resultUnit.textContent = translations[language].invalid;
    renderAllResults(NaN, from);
    renderCostResults(NaN);
    return;
  }

  const squareMeters = amount * from.m2;
  const converted = squareMeters / to.m2;
  els.result.textContent = formatNumber(converted);
  els.resultUnit.textContent = `${unitName(to)} (${unitAbbr(to)})`;
  renderAllResults(squareMeters, from);
  renderCostResults(squareMeters);
}

function renderAllResults(squareMeters, from) {
  els.allResults.innerHTML = units.map(unit => {
    const value = Number.isFinite(squareMeters) ? squareMeters / unit.m2 : NaN;
    return `
      <div class="result-row">
        <div class="result-row-name">
          ${unitName(unit)}
          <span class="result-row-abbr">${unitAbbr(unit)}</span>
        </div>
        <div class="result-row-value">${formatNumber(value)}</div>
      </div>
    `;
  }).join("");
}

function showToast(message) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("show");
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 1600);
}

els.amount.addEventListener("input", calculate);
els.from.addEventListener("change", calculate);
els.to.addEventListener("change", calculate);
els.landCost.addEventListener("input", calculate);
els.currency.addEventListener("change", () => {
  els.outputCurrency.value = els.currency.value;
  calculate();
});
els.outputCurrency.addEventListener("change", calculate);
els.exchangeRateInput.addEventListener("input", () => {
  const manualRate = parseLocalizedNumber(els.exchangeRateInput.value);
  if (Number.isFinite(manualRate) && manualRate > 0) {
    usdHtgRate = manualRate;
    rateUpdatedAt = Date.now();
    rateSource = "manual";
    els.exchangeRateDisplay.textContent = `1 USD = ${formatNumber(usdHtgRate, 4)} HTG`;
    els.exchangeRateStatus.textContent = `${translations[language].manualRate} · ${formatRateTimestamp(rateUpdatedAt)}`;
    calculate();
  }
});
els.refreshRateButton.addEventListener("click", fetchLiveRate);

els.languageButton.addEventListener("click", () => {
  language = language === "en" ? "fr" : "en";
  localStorage.setItem("area-language", language);
  translateInterface();
});

els.swapButton.addEventListener("click", () => {
  const previous = els.from.value;
  els.from.value = els.to.value;
  els.to.value = previous;
  calculate();
});

els.clearButton.addEventListener("click", () => {
  els.amount.value = "";
  els.amount.focus();
  calculate();
});

els.copyButton.addEventListener("click", async () => {
  const text = `${els.result.textContent} ${els.resultUnit.textContent}`;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const temporary = document.createElement("textarea");
    temporary.value = text;
    document.body.appendChild(temporary);
    temporary.select();
    document.execCommand("copy");
    temporary.remove();
  }
  showToast(translations[language].copied);
});

els.precisionButton.addEventListener("click", () => {
  precision = precision >= 8 ? 2 : precision + 1;
  localStorage.setItem("area-precision", String(precision));
  els.precisionValue.textContent = precision;
  calculate();
});

els.precisionValue.textContent = precision;
initializeToolNavigation();
loadCachedRate();
translateInterface();
fetchLiveRate();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
