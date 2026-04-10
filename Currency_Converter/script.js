// ============================================
// ALLE WÄHRUNGEN MIT IHREN FLAGGEN (21 Währungen)
// ============================================
const currencies = [
    { code: "USD", country: "us", name: "US-Dollar", nameEn: "US Dollar", nameIt: "Dollaro USA", nameTr: "ABD Doları", nameAr: "دولار أمريكي" },
    { code: "EUR", country: "eu", name: "Euro", nameEn: "Euro", nameIt: "Euro", nameTr: "Euro", nameAr: "يورو" },
    { code: "GBP", country: "gb", name: "Britisches Pfund", nameEn: "British Pound", nameIt: "Sterlina Britannica", nameTr: "İngiliz Sterlini", nameAr: "جنيه إسترليني" },
    { code: "JPY", country: "jp", name: "Japanischer Yen", nameEn: "Japanese Yen", nameIt: "Yen Giapponese", nameTr: "Japon Yeni", nameAr: "ين ياباني" },
    { code: "CHF", country: "ch", name: "Schweizer Franken", nameEn: "Swiss Franc", nameIt: "Franco Svizzero", nameTr: "İsviçre Frangı", nameAr: "فرنك سويسري" },
    { code: "CAD", country: "ca", name: "Kanadischer Dollar", nameEn: "Canadian Dollar", nameIt: "Dollaro Canadese", nameTr: "Kanada Doları", nameAr: "دولار كندي" },
    { code: "AUD", country: "au", name: "Australischer Dollar", nameEn: "Australian Dollar", nameIt: "Dollaro Australiano", nameTr: "Avustralya Doları", nameAr: "دولار أسترالي" },
    { code: "CNY", country: "cn", name: "Chinesischer Yuan", nameEn: "Chinese Yuan", nameIt: "Yuan Cinese", nameTr: "Çin Yuanı", nameAr: "يوان صيني" },
    { code: "INR", country: "in", name: "Indische Rupie", nameEn: "Indian Rupee", nameIt: "Rupia Indiana", nameTr: "Hindistan Rupisi", nameAr: "روبية هندية" },
    { code: "TRY", country: "tr", name: "Türkische Lira", nameEn: "Turkish Lira", nameIt: "Lira Turca", nameTr: "Türk Lirası", nameAr: "ليرة تركية" },
    { code: "SYP", country: "sy", name: "Syrisches Pfund", nameEn: "Syrian Pound", nameIt: "Lira Siriana", nameTr: "Suriye Lirası", nameAr: "ليرة سورية" },
    { code: "SAR", country: "sa", name: "Saudi-Riyal", nameEn: "Saudi Riyal", nameIt: "Riyal Saudita", nameTr: "Suudi Riyali", nameAr: "ريال سعودي" },
    { code: "AED", country: "ae", name: "VAE-Dirham", nameEn: "UAE Dirham", nameIt: "Dirham Emirati", nameTr: "BAE Dirhemi", nameAr: "درهم إماراتي" },
    { code: "QAR", country: "qa", name: "Katar-Riyal", nameEn: "Qatari Riyal", nameIt: "Riyal del Qatar", nameTr: "Katar Riyali", nameAr: "ريال قطري" },
    { code: "LBP", country: "lb", name: "Libanesisches Pfund", nameEn: "Lebanese Pound", nameIt: "Lira Libanese", nameTr: "Lübnan Lirası", nameAr: "ليرة لبنانية" },
    { code: "IQD", country: "iq", name: "Irakischer Dinar", nameEn: "Iraqi Dinar", nameIt: "Dinaro Iracheno", nameTr: "Irak Dinarı", nameAr: "دينار عراقي" },
    { code: "RUB", country: "ru", name: "Russischer Rubel", nameEn: "Russian Ruble", nameIt: "Rublo Russo", nameTr: "Rus Rublesi", nameAr: "روبل روسي" },
    { code: "JOD", country: "jo", name: "Jordanischer Dinar", nameEn: "Jordanian Dinar", nameIt: "Dinaro Giordano", nameTr: "Ürdün Dinarı", nameAr: "دينار أردني" },
    { code: "EGP", country: "eg", name: "Ägyptisches Pfund", nameEn: "Egyptian Pound", nameIt: "Lira Egiziana", nameTr: "Mısır Lirası", nameAr: "جنيه مصري" },
    { code: "KWD", country: "kw", name: "Kuwaitischer Dinar", nameEn: "Kuwaiti Dinar", nameIt: "Dinaro Kuwaitiano", nameTr: "Kuveyt Dinarı", nameAr: "دينار كويتي" },
    // NEU: Schweden 🇸🇪
    { code: "SEK", country: "se", name: "Schwedische Krone", nameEn: "Swedish Krona", nameIt: "Corona Svedese", nameTr: "İsveç Kronu", nameAr: "كرونا سويدية" }
];

// ============================================
// SPRACHÜBERSETZUNGEN (5 Sprachen: DE, EN, IT, TR, AR)
// ============================================
const translations = {
    de: {
        title: "Währungsrechner",
        amountPlaceholder: "Betrag",
        fromLabel: "Von",
        toLabel: "Nach",
        status: "Live-Wechselkurse | Echte Flaggen | Sofortige Umrechnung",
        loading: "Lade Wechselkurse...",
        error: "Fehler beim Laden der Kurse",
        enterAmount: "Bitte gültigen Betrag eingeben",
        currency: "Währung"
    },
    en: {
        title: "Currency Converter",
        amountPlaceholder: "Amount",
        fromLabel: "From",
        toLabel: "To",
        status: "Live Exchange Rates | Real Flags | Instant Conversion",
        loading: "Loading exchange rates...",
        error: "Error loading rates",
        enterAmount: "Please enter a valid amount",
        currency: "Currency"
    },
    it: {
        title: "Convertitore di Valuta",
        amountPlaceholder: "Importo",
        fromLabel: "Da",
        toLabel: "A",
        status: "Tassi di Cambio Live | Bandiere Reali | Conversione Istantanea",
        loading: "Caricamento tassi di cambio...",
        error: "Errore nel caricamento dei tassi",
        enterAmount: "Inserisci un importo valido",
        currency: "Valuta"
    },
    tr: {
        title: "Döviz Çevirici",
        amountPlaceholder: "Tutar",
        fromLabel: "Kimden",
        toLabel: "Kime",
        status: "Canlı Döviz Kurları | Gerçek Bayraklar | Anında Çeviri",
        loading: "Döviz kurları yükleniyor...",
        error: "Kurlar yüklenirken hata oluştu",
        enterAmount: "Lütfen geçerli bir tutar girin",
        currency: "Para Birimi"
    },
    ar: {
        title: "محول العملات",
        amountPlaceholder: "المبلغ",
        fromLabel: "من",
        toLabel: "إلى",
        status: "أسعار صرف مباشرة | أعلام حقيقية | تحويل فوري",
        loading: "جاري تحميل أسعار الصرف...",
        error: "خطأ في تحميل الأسعار",
        enterAmount: "الرجاء إدخال مبلغ صالح",
        currency: "العملة"
    }
};

let currentLang = "de";
let fromCurrency = "USD";
let toCurrency = "EUR";

// DOM Elemente
const worthFirst = document.getElementById("worth-first");
const worthSecond = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");
const selectedFrom = document.getElementById("selected-from");
const selectedTo = document.getElementById("selected-to");
const dropdownFrom = document.getElementById("dropdown-from");
const dropdownTo = document.getElementById("dropdown-to");

// ============================================
// SPRACHE WECHSELN
// ============================================
function setLanguage(lang) {
    currentLang = lang;
    
    if (lang === "ar") {
        document.documentElement.setAttribute("dir", "rtl");
        document.documentElement.setAttribute("lang", "ar");
    } else {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.setAttribute("lang", lang === "de" ? "de" : lang === "it" ? "it" : lang === "tr" ? "tr" : "en");
    }
    
    const t = translations[lang];
    document.querySelectorAll(".i18n[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (t[key]) el.textContent = t[key];
    });
    
    worthFirst.placeholder = t.amountPlaceholder;
    worthSecond.placeholder = "0.00";
    
    updateAllCurrencyNames();
    
    document.querySelectorAll(".lang-btn").forEach(btn => {
        if (btn.getAttribute("data-lang") === lang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    updateRate();
}

function getCurrencyName(currency, lang) {
    const curr = currencies.find(c => c.code === currency);
    if (!curr) return currency;
    
    switch(lang) {
        case "de": return curr.name;
        case "en": return curr.nameEn;
        case "it": return curr.nameIt;
        case "tr": return curr.nameTr;
        case "ar": return curr.nameAr;
        default: return curr.name;
    }
}

function updateSelectedBoxWithLanguage(selectedBox, currencyCode) {
    const currency = currencies.find(c => c.code === currencyCode);
    if (currency) {
        const img = selectedBox.querySelector("img");
        img.src = `https://flagcdn.com/${currency.country}.svg`;
        img.alt = `${currencyCode} Flagge`;
        const name = getCurrencyName(currencyCode, currentLang);
        selectedBox.querySelector("span").innerHTML = `${currencyCode} - ${name}`;
    }
}

function updateAllCurrencyNames() {
    updateSelectedBoxWithLanguage(selectedFrom, fromCurrency);
    updateSelectedBoxWithLanguage(selectedTo, toCurrency);
    refreshDropdowns();
}

// ============================================
// DROPDOWN MIT FLAGGEN BEFÜLLEN
// ============================================
function buildDropdown(container, selectedCallback) {
    container.innerHTML = "";
    currencies.forEach(currency => {
        const div = document.createElement("div");
        div.classList.add("select-item");
        const name = getCurrencyName(currency.code, currentLang);
        div.innerHTML = `
            <img src="https://flagcdn.com/${currency.country}.svg" alt="${currency.code} Flagge">
            <span>${currency.code} - ${name}</span>
        `;
        div.addEventListener("click", (e) => {
            e.stopPropagation();
            selectedCallback(currency.code);
            container.classList.remove("show");
        });
        container.appendChild(div);
    });
}

function refreshDropdowns() {
    const fromCallback = (code) => {
        fromCurrency = code;
        updateSelectedBoxWithLanguage(selectedFrom, code);
        updateRate();
    };
    const toCallback = (code) => {
        toCurrency = code;
        updateSelectedBoxWithLanguage(selectedTo, code);
        updateRate();
    };
    
    buildDropdown(dropdownFrom, fromCallback);
    buildDropdown(dropdownTo, toCallback);
}

// ============================================
// DROPDOWN ÖFFNEN/SCHLIESSEN
// ============================================
function setupDropdown(selectedEl, dropdownEl) {
    selectedEl.addEventListener("click", (e) => {
        e.stopPropagation();
        document.querySelectorAll(".select-items").forEach(d => {
            if (d !== dropdownEl) d.classList.remove("show");
        });
        dropdownEl.classList.toggle("show");
    });
}

document.addEventListener("click", () => {
    document.querySelectorAll(".select-items").forEach(d => {
        d.classList.remove("show");
    });
});

// ============================================
// WECHSELKURSE VON  API LADEN
// ============================================
async function updateRate() {
    const amount = parseFloat(worthFirst.value);
    const t = translations[currentLang];
    
    if (isNaN(amount) || amount <= 0) {
        worthSecond.value = "0.00";
        exchangeRateEl.innerHTML = `💰 ${t.enterAmount}`;
        return;
    }

    exchangeRateEl.innerHTML = `🔄 ${t.loading}`;

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/Private_api/latest/${fromCurrency}`);
        const data = await response.json();
        
        if (data.result === "success") {
            const rate = data.conversion_rates[toCurrency];
            const result = amount * rate;
            
            worthSecond.value = result.toFixed(2);
            exchangeRateEl.innerHTML = `💱 1 ${fromCurrency} = ${rate.toFixed(6)} ${toCurrency}`;
        } else {
            throw new Error("API Fehler");
        }
    } catch (error) {
        console.error("Fehler:", error);
        exchangeRateEl.innerHTML = `❌ ${t.error}`;
        worthSecond.value = "Error";
    }
}

// ============================================
// INITIALISIERUNG
// ============================================
function init() {
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            setLanguage(lang);
        });
    });
    
    const fromCallback = (code) => {
        fromCurrency = code;
        updateSelectedBoxWithLanguage(selectedFrom, code);
        updateRate();
    };
    const toCallback = (code) => {
        toCurrency = code;
        updateSelectedBoxWithLanguage(selectedTo, code);
        updateRate();
    };
    
    buildDropdown(dropdownFrom, fromCallback);
    buildDropdown(dropdownTo, toCallback);
    
    updateSelectedBoxWithLanguage(selectedFrom, "USD");
    updateSelectedBoxWithLanguage(selectedTo, "EUR");
    
    setupDropdown(selectedFrom, dropdownFrom);
    setupDropdown(selectedTo, dropdownTo);
    
    worthFirst.addEventListener("input", updateRate);
    
    setLanguage("de");
}

init();
