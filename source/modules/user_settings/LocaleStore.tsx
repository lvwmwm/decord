// Module ID: 1921
// Function ID: 21734
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5, 1922, 1316, 3741, 1212, 566, 686, 2]

// Module 1921 (_isNativeReflectConstruct)
import _setAppLocale from "_setAppLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import asyncGeneratorStep from "asyncGeneratorStep";
import { setAppLocale } from "_setAppLocale";
import closure_10 from "_isNativeReflectConstruct";
import { systemLocale } from "getSystemLocale";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
async function _getSystemLocale() {
  let prop;
  if (null != outer2_1(outer2_2[8])) {
    const app = outer2_1(outer2_2[8]).app;
    if (null != app) {
      prop = app.getPreferredSystemLanguages;
    }
  }
  if (null != prop) {
    const app2 = outer2_1(outer2_2[8]).app;
    const preferredSystemLanguages = app2.getPreferredSystemLanguages();
    const tmp6 = yield preferredSystemLanguages.then((arg0) => arg0[0]);
    if (null != tmp6) {
      if ("" !== tmp6) {
        return tmp6;
      }
    }
  }
  return outer2_0(outer2_2[9]).systemLocale;
}
function handleUpdate() {
  const localization = settings.settings.localization;
  let value;
  if (null != localization) {
    if (null != localization.locale) {
      value = iter.value;
    }
  }
  let flag = null != value;
  if (flag) {
    flag = "" !== value;
  }
  if (flag) {
    flag = value !== currentLocale;
  }
  if (flag) {
    currentLocale = value;
    setAppLocale(value);
    flag = true;
  }
  return flag;
}
let currentLocale = require("getSystemLocale").intl.currentLocale;
(function getSystemLocale() {
  return _getSystemLocale(...arguments);
})().then((arg0) => {
  let closure_12 = arg0;
});
let tmp3 = ((Store) => {
  class LocaleStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, LocaleStore);
      obj = outer1_6(LocaleStore);
      tmp2 = outer1_5;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(LocaleStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10);
      outer1_15();
      outer1_9(outer1_11);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "locale",
    get() {
      return outer1_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "systemLocale",
    get() {
      return outer1_12;
    }
  };
  items[2] = obj;
  return callback(LocaleStore, items);
})(require("initialize").Store);
tmp3.displayName = "LocaleStore";
tmp3 = new tmp3(require("dispatcher"), {
  OVERLAY_INITIALIZE: handleUpdate,
  CACHE_LOADED: handleUpdate,
  CONNECTION_OPEN: handleUpdate,
  USER_SETTINGS_PROTO_UPDATE: handleUpdate,
  USER_SETTINGS_LOCALE_OVERRIDE: function handleLocaleOverride(locale) {
    locale = locale.locale;
    setAppLocale(locale);
  }
});
let obj = {
  OVERLAY_INITIALIZE: handleUpdate,
  CACHE_LOADED: handleUpdate,
  CONNECTION_OPEN: handleUpdate,
  USER_SETTINGS_PROTO_UPDATE: handleUpdate,
  USER_SETTINGS_LOCALE_OVERRIDE: function handleLocaleOverride(locale) {
    locale = locale.locale;
    setAppLocale(locale);
  }
};
const promise = (function getSystemLocale() {
  return _getSystemLocale(...arguments);
})();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_settings/LocaleStore.tsx");

export default tmp3;
