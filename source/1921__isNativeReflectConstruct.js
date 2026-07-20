// Module ID: 1921
// Function ID: 21727
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1921 (_isNativeReflectConstruct)
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
  if (null != callback2(closure_2[8])) {
    const app = callback2(closure_2[8]).app;
    if (null != app) {
      prop = app.getPreferredSystemLanguages;
    }
  }
  if (null != prop) {
    const app2 = callback2(closure_2[8]).app;
    const preferredSystemLanguages = app2.getPreferredSystemLanguages();
    const tmp6 = yield preferredSystemLanguages.then((arg0) => arg0[0]);
    if (null != tmp6) {
      if ("" !== tmp6) {
        return tmp6;
      }
    }
  }
  return callback(closure_2[9]).systemLocale;
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
    const currentLocale = value;
    setAppLocale(value);
    flag = true;
  }
  return flag;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const setAppLocale = arg1(dependencyMap[6]).setAppLocale;
let closure_10 = importDefault(dependencyMap[7]);
const currentLocale = arg1(dependencyMap[9]).intl.currentLocale;
const systemLocale = arg1(dependencyMap[9]).systemLocale;
function getSystemLocale() {
  return _getSystemLocale(...arguments);
}().then((arg0) => {
  const systemLocale = arg0;
});
let tmp3 = (Store) => {
  class LocaleStore {
    constructor() {
      self = this;
      tmp = closure_3(this, LocaleStore);
      obj = closure_6(LocaleStore);
      tmp2 = closure_5;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = LocaleStore;
  callback2(LocaleStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10);
      callback5();
      callback3(closure_11);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "locale",
    get() {
      return closure_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "systemLocale",
    get() {
      return closure_12;
    }
  };
  items[2] = obj;
  return callback(LocaleStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp3.displayName = "LocaleStore";
tmp3 = new tmp3(importDefault(dependencyMap[11]), {
  OVERLAY_INITIALIZE: handleUpdate,
  CACHE_LOADED: handleUpdate,
  CONNECTION_OPEN: handleUpdate,
  USER_SETTINGS_PROTO_UPDATE: handleUpdate,
  USER_SETTINGS_LOCALE_OVERRIDE: function handleLocaleOverride(locale) {
    locale = locale.locale;
    const currentLocale = locale;
    setAppLocale(locale);
  }
});
const obj = {
  OVERLAY_INITIALIZE: handleUpdate,
  CACHE_LOADED: handleUpdate,
  CONNECTION_OPEN: handleUpdate,
  USER_SETTINGS_PROTO_UPDATE: handleUpdate,
  USER_SETTINGS_LOCALE_OVERRIDE: function handleLocaleOverride(locale) {
    locale = locale.locale;
    const currentLocale = locale;
    setAppLocale(locale);
  }
};
const promise = function getSystemLocale() {
  return _getSystemLocale(...arguments);
}();
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/LocaleStore.tsx");

export default tmp3;
