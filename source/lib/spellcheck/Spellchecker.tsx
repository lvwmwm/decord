// Module ID: 5138
// Function ID: 44562
// Name: normalizeLocale
// Dependencies: [5, 57, 6, 7, 1921, 3, 3741, 5139, 5140, 5141, 22, 1835, 1327, 2]
// Exports: install

// Module 5138 (normalizeLocale)
import timestamp from "timestamp";
import _slicedToArray from "_slicedToArray";
import set from "set";
import closure_6 from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "_defineProperties";
import importDefaultResult1 from "apply";

const require = arg1;
function normalizeLocale(arg0) {
  let str = arg0;
  const tmp = importDefault(5139)[arg0];
  if (null != tmp) {
    str = tmp;
  }
  const parsed = require(5140) /* parse */.parse(str.replace(/[_-]/g, "-"));
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
  const tmp = yield outer2_9.getAvailableDictionaries();
  let items = tmp;
  if (null == tmp) {
    items = [];
  }
  const mapped = items.map(outer2_12);
  const tmp2 = new outer2_10(mapped.filter(outer2_0(outer2_2[12]).isNotNullish));
  (function attachToInput(arg0) {
    let closure_0 = arg0;
    if (null != document.body) {
      const _document = document;
      const listener = body.addEventListener("beforeinput", (target) => outer4_11(closure_0, target.target), true);
    }
  })(tmp2);
  return tmp2;
}
importDefaultResult = new importDefaultResult("Spellchecker");
let spellCheck;
if (null != require("set")) {
  spellCheck = require("set").spellCheck;
}
const tmp5 = (() => {
  class Spellchecker {
    constructor(arg0) {
      self = this;
      closure_1 = arg0;
      tmp = outer1_5(this, self);
      this._enabled = true;
      this.misspelledWord = "";
      this.corrections = [];
      str = outer1_7.locale;
      tmp2 = outer1_4(str.split("-"), 2);
      first = tmp2[0];
      locale = first;
      this.regionPreference = tmp2[1];
      getAvailableLanguages = this.getAvailableLanguages(arg0);
      tmp4 = outer1_1(outer1_2[9]);
      tmp4 = new tmp4(first, (arg0) => {
        const combined = "" + arg0 + "-" + self.regionPreference;
        if (-1 !== closure_1.indexOf(combined)) {
          self.setLocale(combined);
        } else {
          let tmp3 = table[arg0];
          if (null == tmp3) {
            tmp3 = outer2_1(outer2_2[7])[first];
          }
          if (null != tmp3) {
            self.setLocale(tmp3);
          }
        }
      });
      this.languageDetector = tmp4;
      onResult = outer1_9.on("spellcheck-result", (arg0, arg1) => {
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
  let obj = {
    key: "enabled",
    get() {
      return this._enabled;
    },
    set(_enabled) {
      this._enabled = _enabled;
    }
  };
  let items = [obj, , , , , , , , , ];
  obj = {
    key: "setLearnedWords",
    value(arg0) {
      outer1_9.setLearnedWords(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "setLocale",
    value(combined) {
      let closure_0 = combined;
      const setLocaleResult = outer1_9.setLocale(combined);
      if (null != setLocaleResult) {
        setLocaleResult.then((arg0) => {
          let str = "(unavailable)";
          const combined = "Switching to " + closure_0;
          if (arg0) {
            str = "(available)";
          }
          outer2_8.info(combined, str);
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
      const item = arr.forEach((arg0) => {
        let tmp = arg0;
        const first = outer2_4(arg0.split("-"), 1)[0];
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
      outer1_9.replaceMisspelling(arg0);
    }
  };
  return callback2(Spellchecker, items);
})();
let closure_10 = tmp5;
let closure_11 = require("apply").debounce((detectLanguage, hasAttribute) => {
  let textContent = null;
  if (null != hasAttribute) {
    if (!obj.isElement(hasAttribute, globalThis.HTMLInputElement)) {
      if (!obj2.isElement(hasAttribute, globalThis.HTMLTextAreaElement)) {
        if (obj3.isElement(hasAttribute)) {
          if (hasAttribute.hasAttribute("contenteditable")) {
            textContent = hasAttribute.textContent;
          }
        }
        obj3 = require(1835) /* set */;
      }
      obj2 = require(1835) /* set */;
    }
    textContent = hasAttribute.value;
    obj = require(1835) /* set */;
  }
  if (null != textContent) {
    detectLanguage.detectLanguage(textContent);
  }
}, 250);
const result = require("_classCallCheck").fileFinishedImporting("lib/spellcheck/Spellchecker.tsx");

export const Spellchecker = tmp5;
export const install = function install() {
  return _install(...arguments);
};
