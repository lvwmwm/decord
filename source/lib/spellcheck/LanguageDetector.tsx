// Module ID: 5409
// Function ID: 46139
// Name: LanguageDetector
// Dependencies: []

// Module 5409 (LanguageDetector)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class LanguageDetector {
    constructor(arg0, arg1) {
      tmp = closure_2(this, LanguageDetector);
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
  const importDefault = LanguageDetector;
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
      const LanguageDetector = this;
      if (!this._processing) {
        tmp._processing = true;
        requestIdleCallback((timeRemaining) => {
          const self = timeRemaining;
          if (timeRemaining.timeRemaining() <= self._minimumTimeRemaining) {
            self._processEnd();
          } else {
            if (arr.length > 256) {
              const arr = arr.slice(0, 256);
            }
            function detectLanguage(closure_1, _languageHint) {
              closure_1 = _languageHint;
              const obj = closure_1(closure_1[2]);
              return closure_1(closure_1[2]).ensureModule("discord_spellcheck").then(() => {
                const arg0 = arg0(arg1[2]).requireModule("discord_spellcheck").cld;
                const obj = arg0(arg1[2]);
                return new Promise(() => { ... });
              });
            }(arr, self._languageHint).then((language) => {
              language.language = language;
              language._processEnd(language.didTimeout);
            }, (self) => {
              self._processEnd(self.didTimeout);
            });
            const promise = function detectLanguage(closure_1, _languageHint) {
              closure_1 = _languageHint;
              const obj = closure_1(closure_1[2]);
              return closure_1(closure_1[2]).ensureModule("discord_spellcheck").then(() => {
                const arg0 = arg0(arg1[2]).requireModule("discord_spellcheck").cld;
                const obj = arg0(arg1[2]);
                return new Promise(() => { ... });
              });
            }(arr, self._languageHint);
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
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("lib/spellcheck/LanguageDetector.tsx");

export default tmp2;
