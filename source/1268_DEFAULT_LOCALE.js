// Module ID: 1268
// Function ID: 14316
// Name: DEFAULT_LOCALE
// Dependencies: [57, 6, 7, 1252, 1251, 1254]

// Module 1268 (DEFAULT_LOCALE)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export const DEFAULT_LOCALE = "en-US";
export const IntlManager = (() => {
  class IntlManager {
    constructor(arg0) {
      self = this;
      self = this;
      DEFAULT_LOCALE = arg0.initialLocale;
      if (undefined === DEFAULT_LOCALE) {
        tmp = outer1_1;
        DEFAULT_LOCALE = outer1_1.DEFAULT_LOCALE;
      }
      DEFAULT_LOCALE2 = arg0.defaultLocale;
      if (undefined === DEFAULT_LOCALE2) {
        tmp2 = outer1_1;
        DEFAULT_LOCALE2 = outer1_1.DEFAULT_LOCALE;
      }
      DEFAULT_FORMAT_CONFIG = arg0.formatConfig;
      if (undefined === DEFAULT_FORMAT_CONFIG) {
        tmp3 = IntlManager;
        tmp4 = outer1_2;
        num = 3;
        DEFAULT_FORMAT_CONFIG = IntlManager(outer1_2[3]).DEFAULT_FORMAT_CONFIG;
      }
      forceLookupMatcher = arg0.forceLookupMatcher;
      tmp5 = undefined !== forceLookupMatcher && forceLookupMatcher;
      tmp6 = outer1_4(self, self);
      self.onLocaleChange = (arg0) => {
        const _self = arg0;
        let _localeSubscriptions = _self._localeSubscriptions;
        _localeSubscriptions.add(arg0);
        return () => {
          _localeSubscriptions = _localeSubscriptions._localeSubscriptions;
          return _localeSubscriptions.delete(_localeSubscriptions);
        };
      };
      self.currentLocale = DEFAULT_LOCALE;
      self.defaultLocale = DEFAULT_LOCALE2;
      self.formatConfig = DEFAULT_FORMAT_CONFIG;
      self._forceLookupMatcher = tmp5;
      items = [, ];
      ({ currentLocale: arr[0], defaultLocale: arr[1] } = self);
      self.data = IntlManager(outer1_2[4]).makeDataFormatters(items, self.formatConfig, self._forceLookupMatcher);
      set = new Set();
      self._localeSubscriptions = set;
      return;
    }
  }
  let obj = {
    key: "withFormatters",
    value: function withFormatters(getLanguages) {
      const self = this;
      const entries = Object.entries(getLanguages);
      while (tmp2 !== undefined) {
        let tmp4 = outer1_3;
        let tmp5 = outer1_3(tmp3, 2);
        self[tmp5[0]] = self.makeFormatFunction(tmp5[1]);
        continue;
      }
      return self;
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "makeFormatFunction",
    value: function makeFormatFunction(arg0) {
      let closure_1;
      let format;
      const self = this;
      ({ format, builder: closure_1 } = arg0);
      let closure_2 = format.bind(this);
      return (arg0, arg1) => {
        let tmp = null;
        if (null != arg0) {
          tmp = callback(arg0(self.currentLocale), arg1, closure_1);
        }
        return tmp;
      };
    }
  };
  items[1] = obj;
  obj = {
    key: "setLocale",
    value: function setLocale(combined) {
      this.currentLocale = combined;
      const items = [, ];
      ({ currentLocale: arr[0], defaultLocale: arr[1] } = this);
      this.data = IntlManager(outer1_2[4]).makeDataFormatters(items, this.formatConfig, this._forceLookupMatcher);
      this.emitLocaleChange(combined);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "emitLocaleChange",
    value: function emitLocaleChange(combined) {
      for (const item10006 of tmp) {
        let tmp2 = arg0;
        let item10006Result = item10006(arg0);
        continue;
      }
    }
  };
  items[4] = {
    key: "string",
    value: function string(arg0) {
      let str = "";
      if (null != arg0) {
        const self = this;
        str = arg0(this.currentLocale).reserialize();
        const obj = arg0(this.currentLocale);
      }
      return str;
    }
  };
  items[5] = {
    key: "reserialize",
    value: function reserialize(arg0) {
      if (null == arg0) {
        return "";
      } else {
        const self = this;
        const obj = arg0(this.currentLocale);
        let reserializeResult = obj;
        if ("string" !== typeof obj) {
          reserializeResult = obj.reserialize();
        }
        return reserializeResult;
      }
    }
  };
  items[6] = {
    key: "bindFormatValues",
    value: function bindFormatValues(Builder, ast, values) {
      const items = [, ];
      ({ currentLocale: arr[0], defaultLocale: arr[1] } = this);
      return IntlManager(outer1_2[5]).bindFormatValues({ Builder, nodes: ast.ast, locales: items, dataFormatters: this.data, formatConfig: this.formatConfig, values, keyPrefix: "" });
    }
  };
  return _defineProperties(IntlManager, items);
})();
