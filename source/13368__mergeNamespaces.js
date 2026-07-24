// Module ID: 13368
// Function ID: 102359
// Name: _mergeNamespaces
// Dependencies: [13369]

// Module 13368 (_mergeNamespaces)
import _mergeNamespaces from "_mergeNamespaces";

if (_mergeNamespaces) {
  if ("object" === typeof _mergeNamespaces) {
    let obj = _mergeNamespaces;
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
        const items = ["en", "es", "ru", "zh"];
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
  tmp2 = globalThis;
}
obj = { default: _mergeNamespaces };
