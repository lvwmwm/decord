// Module ID: 1268
// Function ID: 14315
// Name: DEFAULT_LOCALE
// Dependencies: []

// Module 1268 (DEFAULT_LOCALE)
let closure_3 = require(dependencyMap[0]);
let closure_4 = require(dependencyMap[1]);
let closure_5 = require(dependencyMap[2]);

export const DEFAULT_LOCALE = "en-US";
export const IntlManager = () => {
  class IntlManager {
    constructor(arg0) {
      self = this;
      IntlManager = this;
      DEFAULT_LOCALE = arg0.initialLocale;
      if (undefined === DEFAULT_LOCALE) {
        tmp = closure_1;
        DEFAULT_LOCALE = closure_1.DEFAULT_LOCALE;
      }
      DEFAULT_LOCALE2 = arg0.defaultLocale;
      if (undefined === DEFAULT_LOCALE2) {
        tmp2 = closure_1;
        DEFAULT_LOCALE2 = closure_1.DEFAULT_LOCALE;
      }
      DEFAULT_FORMAT_CONFIG = arg0.formatConfig;
      if (undefined === DEFAULT_FORMAT_CONFIG) {
        tmp3 = IntlManager;
        tmp4 = closure_2;
        num = 3;
        DEFAULT_FORMAT_CONFIG = IntlManager(closure_2[3]).DEFAULT_FORMAT_CONFIG;
      }
      forceLookupMatcher = arg0.forceLookupMatcher;
      tmp5 = undefined !== forceLookupMatcher && forceLookupMatcher;
      tmp6 = closure_4(self, IntlManager);
      self.onLocaleChange = (arg0) => {
        const self = arg0;
        const _localeSubscriptions = self._localeSubscriptions;
        _localeSubscriptions.add(arg0);
        return () => {
          const _localeSubscriptions = arg0._localeSubscriptions;
          return _localeSubscriptions.delete(arg0);
        };
      };
      self.currentLocale = DEFAULT_LOCALE;
      self.defaultLocale = DEFAULT_LOCALE2;
      self.formatConfig = DEFAULT_FORMAT_CONFIG;
      self._forceLookupMatcher = tmp5;
      items = [, ];
      ({ currentLocale: arr[0], defaultLocale: arr[1] } = self);
      self.data = IntlManager(closure_2[4]).makeDataFormatters(items, self.formatConfig, self._forceLookupMatcher);
      set = new Set();
      self._localeSubscriptions = set;
      return;
    }
  }
  const require = IntlManager;
  let obj = {
    key: "withFormatters",
    value: function withFormatters(arg0) {
      const self = this;
      const entries = Object.entries(arg0);
      while (tmp2 !== undefined) {
        let tmp4 = callback;
        let tmp5 = callback(tmp3, 2);
        self[tmp5[0]] = self.makeFormatFunction(tmp5[1]);
        // continue
      }
      return self;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "makeFormatFunction",
    value: function makeFormatFunction(arg0) {
      let format;
      const IntlManager = this;
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
      this.data = IntlManager(closure_2[4]).makeDataFormatters(items, this.formatConfig, this._forceLookupMatcher);
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
      return IntlManager(closure_2[5]).bindFormatValues({ Builder, nodes: ast.ast, locales: items, dataFormatters: this.data, formatConfig: this.formatConfig, values, keyPrefix: "" });
    }
  };
  return callback(IntlManager, items);
}();
