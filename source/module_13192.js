// Module ID: 13192
// Function ID: 99821
// Dependencies: []

// Module 13192
const _module = require(dependencyMap[0]);
if (_module) {
  if ("object" === typeof _module) {
    let obj = _module;
  }
  const _Intl = Intl;
  if ("undefined" === typeof Intl) {
    if (undefined !== global) {
      obj = {};
      obj.PluralRules = obj.default;
      global.Intl = obj;
      obj = true;
      obj.default.polyfill = true;
    } else {
      const _window = window;
      if ("undefined" === typeof window) {
        obj = {};
        obj.PluralRules = obj.default;
        const self = this;
        this.Intl = obj;
      }
    }
    const obj1 = { PluralRules: obj.default };
    tmp2.window.Intl = obj1;
  } else {
    const _Intl5 = Intl;
    if (Intl.PluralRules) {
      const _Intl2 = Intl;
      if (Intl.PluralRules.prototype.selectRange) {
        const items = ["<string:2439053313>", "<string:1118203473>", "rgba(0, 0, 0, 0.60)", "rgba(0, 0, 0, 1)"];
        const _Intl4 = Intl;
        if (PluralRules.supportedLocalesOf(items).length < items.length) {
          const _Intl6 = Intl;
          Intl.PluralRules = obj.default;
          obj.default.polyfill = true;
        }
      }
    }
    const _Intl3 = Intl;
    Intl.PluralRules = obj.default;
    obj.default.polyfill = true;
  }
  const tmp2 = globalThis;
}
obj = { default: _module };
