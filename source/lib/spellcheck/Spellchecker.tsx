// Module ID: 5406
// Function ID: 46110
// Name: normalizeLocale
// Dependencies: []
// Exports: install

// Module 5406 (normalizeLocale)
function normalizeLocale(arg0) {
  let str = arg0;
  const tmp = importDefault(dependencyMap[7])[arg0];
  if (null != tmp) {
    str = tmp;
  }
  const parsed = arg1(dependencyMap[8]).parse(str.replace(/[_-]/g, "-"));
  if (null != parsed) {
    if (null != parsed.langtag.language) {
      if (null != parsed.langtag.region) {
        const langtag = parsed.langtag;
        const formatted = langtag.language.language.toLowerCase();
        const _HermesInternal = HermesInternal;
        return "" + formatted + "-" + langtag.region.toUpperCase();
      }
    }
  }
  importDefaultResult.error("" + str + " is not a valid locale.");
}
async function _install() {
  const tmp = yield closure_9.getAvailableDictionaries();
  let items = tmp;
  if (null == tmp) {
    items = [];
  }
  const mapped = items.map(closure_12);
  const tmp2 = new closure_10(mapped.filter(callback(closure_2[12]).isNotNullish));
  function attachToInput(arg0) {
    if (null != document.body) {
      const _document = document;
      const listener = body.addEventListener("beforeinput", (target) => callback(target, target.target), true);
    }
  }(tmp2);
  return tmp2;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult("Spellchecker");
let spellCheck;
if (null != importDefault(dependencyMap[6])) {
  spellCheck = importDefault(dependencyMap[6]).spellCheck;
}
const tmp5 = () => {
  class Spellchecker {
    constructor(arg0) {
      Spellchecker = this;
      arg0 = arg0;
      tmp = closure_5(this, Spellchecker);
      this._enabled = true;
      this.misspelledWord = "";
      this.corrections = [];
      str = closure_7.locale;
      tmp2 = closure_4(str.split("-"), 2);
      first = tmp2[0];
      locale = first;
      this.regionPreference = tmp2[1];
      getAvailableLanguages = this.getAvailableLanguages(arg0);
      tmp4 = arg0(locale[9]);
      tmp4 = new tmp4(first, (arg0) => {
        const combined = "" + arg0 + "-" + self.regionPreference;
        if (-1 !== arg0.indexOf(combined)) {
          self.setLocale(combined);
        } else {
          let tmp3 = closure_3[arg0];
          if (null == tmp3) {
            tmp3 = arg0(first[7])[closure_2];
          }
          if (null != tmp3) {
            self.setLocale(tmp3);
          }
        }
      });
      this.languageDetector = tmp4;
      onResult = closure_9.on("spellcheck-result", (arg0, arg1) => {
        let items = arg1;
        let str = "";
        if (null != arg0) {
          str = arg0;
        }
        self.misspelledWord = str;
        if (null == items) {
          items = [];
        }
        self.corrections = items;
      });
      return;
    }
  }
  const arg1 = Spellchecker;
  let obj = {
    key: "enabled",
    get() {
      return this._enabled;
    },
    set(_enabled) {
      this._enabled = _enabled;
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "setLearnedWords",
    value(arg0) {
      store.setLearnedWords(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "setLocale",
    value(combined) {
      const Spellchecker = combined;
      const setLocaleResult = store.setLocale(combined);
      if (null != setLocaleResult) {
        setLocaleResult.then((arg0) => {
          let str = "(unavailable)";
          const combined = "Switching to " + arg0;
          if (arg0) {
            str = "(available)";
          }
          closure_8.info(combined, str);
        });
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setAppLocale",
    value(arg0) {
      this.regionPreference = arg0.split("-")[1];
    }
  };
  items[4] = {
    key: "detectLanguage",
    value(arg0) {
      if (this.enabled) {
        const languageDetector = this.languageDetector;
        languageDetector.process(arg0);
      }
    }
  };
  items[5] = {
    key: "getAvailableLanguages",
    value(arr) {
      const obj = {};
      const Spellchecker = obj;
      const item = arr.forEach((arg0) => {
        let tmp = arg0;
        const first = callback(arg0.split("-"), 1)[0];
        if (null != obj[first]) {
          tmp = tmp4;
        }
        obj[first] = tmp;
      });
      return obj;
    }
  };
  items[6] = {
    key: "isMisspelled",
    value(arg0) {
      let tmp = "" !== this.misspelledWord;
      if (tmp) {
        tmp = arg0 === this.misspelledWord;
      }
      return tmp;
    }
  };
  items[7] = {
    key: "getCorrectionsForMisspelling",
    value(arg0, flag) {
      return this.isMisspelled(arg0, flag) ? this.corrections : [];
    }
  };
  items[8] = {
    key: "getCachedMisspelling",
    value() {
      return { misspelledWord: this.misspelledWord, corrections: this.corrections };
    }
  };
  items[9] = {
    key: "replaceMisspelling",
    value(arg0) {
      store.replaceMisspelling(arg0);
    }
  };
  return callback2(Spellchecker, items);
}();
let closure_11 = importDefault(dependencyMap[10]).debounce((detectLanguage, hasAttribute) => {
  let textContent = null;
  if (null != hasAttribute) {
    if (!obj.isElement(hasAttribute, globalThis.HTMLInputElement)) {
      if (!obj2.isElement(hasAttribute, globalThis.HTMLTextAreaElement)) {
        if (obj3.isElement(hasAttribute)) {
          if (hasAttribute.hasAttribute("contenteditable")) {
            textContent = hasAttribute.textContent;
          }
        }
        const obj3 = hasAttribute(dependencyMap[11]);
      }
      const obj2 = hasAttribute(dependencyMap[11]);
    }
    textContent = hasAttribute.value;
    const obj = hasAttribute(dependencyMap[11]);
  }
  if (null != textContent) {
    detectLanguage.detectLanguage(textContent);
  }
}, 250);
const importDefaultResult1 = importDefault(dependencyMap[10]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("lib/spellcheck/Spellchecker.tsx");

export const Spellchecker = tmp5;
export const install = function install() {
  return _install(...arguments);
};
