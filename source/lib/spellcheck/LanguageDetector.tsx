// Module ID: 5141
// Function ID: 44586
// Name: LanguageDetector
// Dependencies: [6, 7, 5142, 2]

// Module 5141 (LanguageDetector)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class LanguageDetector {
    constructor(arg0, arg1) {
      tmp = outer1_2(this, LanguageDetector);
      this._shouldProcess = false;
      this._processing = false;
      this._minimumTimeRemaining = 5;
      this._language = arg0;
      this._languageHint = arg0;
      this._onChange = arg1;
      tmp2 = arg1(arg0);
      return;
    }
  }
  let obj = {
    key: "language",
    get() {
      return this._language;
    },
    set(_language) {
      const self = this;
      if (this._language !== _language) {
        self._language = _language;
        self._onChange(_language);
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "languageHint",
    set(_languageHint) {
      this._languageHint = _languageHint;
    }
  };
  items[1] = obj;
  obj = {
    key: "process",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      if (!this._processing) {
        tmp._processing = true;
        requestIdleCallback((timeRemaining) => {
          const _self = timeRemaining;
          if (timeRemaining.timeRemaining() <= _self._minimumTimeRemaining) {
            _self._processEnd();
          } else {
            if (arr.length > 256) {
              arr = arr.slice(0, 256);
            }
            (function detectLanguage(closure_1, _languageHint) {
              let closure_0 = closure_1;
              closure_1 = _languageHint;
              let obj = LanguageDetector(outer3_1[2]);
              return LanguageDetector(outer3_1[2]).ensureModule("discord_spellcheck").then(() => {
                let cld = LanguageDetector(outer4_1[2]).requireModule("discord_spellcheck").cld;
                const obj = LanguageDetector(outer4_1[2]);
                return new Promise(() => { ... });
              });
            })(arr, _self._languageHint).then((language) => {
              timeRemaining.language = language;
              timeRemaining._processEnd(timeRemaining.didTimeout);
            }, () => {
              timeRemaining._processEnd(timeRemaining.didTimeout);
            });
            const promise = (function detectLanguage(closure_1, _languageHint) {
              let closure_0 = closure_1;
              closure_1 = _languageHint;
              let obj = LanguageDetector(outer3_1[2]);
              return LanguageDetector(outer3_1[2]).ensureModule("discord_spellcheck").then(() => {
                let cld = LanguageDetector(outer4_1[2]).requireModule("discord_spellcheck").cld;
                const obj = LanguageDetector(outer4_1[2]);
                return new Promise(() => { ... });
              });
            })(arr, _self._languageHint);
          }
        });
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_processEnd",
    value() {
      let flag = arg0;
      const self = this;
      if (arg0 === undefined) {
        flag = false;
      }
      self._processing = false;
      if (flag) {
        self._minimumTimeRemaining = self._minimumTimeRemaining + 1;
      }
    }
  };
  return callback(LanguageDetector, items);
})();
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("lib/spellcheck/LanguageDetector.tsx");

export default tmp2;
