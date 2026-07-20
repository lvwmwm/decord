// Module ID: 13640
// Function ID: 103364
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13640 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getStartOfCurrentDayPeriod() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.getTime();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = null;
let closure_6 = null;
let closure_7 = null;
let tmp2 = (PersistedStore) => {
  class ParentalConsentWarningStore {
    constructor() {
      self = this;
      tmp = ParentalConsentWarningStore(this, ParentalConsentWarningStore);
      obj = closure_3(ParentalConsentWarningStore);
      tmp2 = closure_2;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = ParentalConsentWarningStore;
  callback2(ParentalConsentWarningStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(lastWarningFetchDayStart) {
      let prop;
      if (null != lastWarningFetchDayStart) {
        prop = lastWarningFetchDayStart.lastWarningFetchDayStart;
      }
      let tmp2 = null;
      if (null != prop) {
        tmp2 = prop;
      }
      let prop1;
      if (null != lastWarningFetchDayStart) {
        prop1 = lastWarningFetchDayStart.lastModalShownDayStart;
      }
      let tmp4 = null;
      if (null != prop1) {
        tmp4 = prop1;
      }
      let warning;
      if (null != lastWarningFetchDayStart) {
        warning = lastWarningFetchDayStart.warning;
      }
      let tmp6 = null;
      if (null != warning) {
        tmp6 = warning;
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getWarning",
    value() {
      return closure_7;
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldFetchToday",
    value() {
      let tmp = null == closure_5;
      if (!tmp) {
        tmp = closure_5 !== callback3();
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasShownModalToday",
    value() {
      let tmp = null != closure_6;
      if (tmp) {
        tmp = closure_6 === callback3();
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getState",
    value() {
      return { lastWarningFetchDayStart: closure_5, lastModalShownDayStart: closure_6, warning: closure_7 };
    }
  };
  return callback(ParentalConsentWarningStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "ParentalConsentWarningStore";
tmp2.persistKey = "ParentalConsentWarningStore";
const items = [
  (lastWarningFetchDayStart) => {
    const obj = {};
    let prop;
    if (null != lastWarningFetchDayStart) {
      prop = lastWarningFetchDayStart.lastWarningFetchDayStart;
    }
    let tmp2 = null;
    if (null != prop) {
      tmp2 = prop;
    }
    obj.lastWarningFetchDayStart = tmp2;
    let prop1;
    if (null != lastWarningFetchDayStart) {
      prop1 = lastWarningFetchDayStart.lastModalShownDayStart;
    }
    let tmp4 = null;
    if (null != prop1) {
      tmp4 = prop1;
    }
    obj.lastModalShownDayStart = tmp4;
    let warning;
    if (null != lastWarningFetchDayStart) {
      warning = lastWarningFetchDayStart.warning;
    }
    let tmp6 = null;
    if (null != warning) {
      tmp6 = warning;
    }
    obj.warning = tmp6;
    return obj;
  }
];
tmp2.migrations = items;
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  PARENTAL_CONSENT_WARNING_FETCH_SUCCESS: function handleFetchSuccess(warning) {
    warning = warning.warning;
    let closure_5 = getStartOfCurrentDayPeriod();
    tmp2.persist();
  },
  PARENTAL_CONSENT_WARNING_MODAL_SHOWN: function handleModalShown() {
    let closure_6 = getStartOfCurrentDayPeriod();
    tmp2.persist();
  },
  PARENTAL_CONSENT_WARNING_CLEARED: function handleWarningCleared() {
    let closure_7 = null;
    tmp2.persist();
  },
  LOGOUT: function handleLogout() {
    let closure_5 = null;
    let closure_6 = null;
    let closure_7 = null;
    tmp2.persist();
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/parent_tools/ParentalConsentWarningStore.tsx");

export default tmp2;
