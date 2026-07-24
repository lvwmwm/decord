// Module ID: 13821
// Function ID: 105922
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 13821 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
function getStartOfCurrentDayPeriod() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.getTime();
}
let c5 = null;
let c6 = null;
let c7 = null;
let tmp2 = ((PersistedStore) => {
  class ParentalConsentWarningStore {
    constructor() {
      self = this;
      tmp = ParentalConsentWarningStore(this, ParentalConsentWarningStore);
      obj = outer1_3(ParentalConsentWarningStore);
      tmp2 = outer1_2;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
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
      const outer1_5 = tmp2;
      let prop1;
      if (null != lastWarningFetchDayStart) {
        prop1 = lastWarningFetchDayStart.lastModalShownDayStart;
      }
      let tmp4 = null;
      if (null != prop1) {
        tmp4 = prop1;
      }
      const outer1_6 = tmp4;
      let warning;
      if (null != lastWarningFetchDayStart) {
        warning = lastWarningFetchDayStart.warning;
      }
      let tmp6 = null;
      if (null != warning) {
        tmp6 = warning;
      }
      const outer1_7 = tmp6;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getWarning",
    value() {
      return outer1_7;
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldFetchToday",
    value() {
      let tmp = null == outer1_5;
      if (!tmp) {
        tmp = outer1_5 !== outer1_10();
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasShownModalToday",
    value() {
      let tmp = null != outer1_6;
      if (tmp) {
        tmp = outer1_6 === outer1_10();
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getState",
    value() {
      return { lastWarningFetchDayStart: outer1_5, lastModalShownDayStart: outer1_6, warning: outer1_7 };
    }
  };
  return callback(ParentalConsentWarningStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "ParentalConsentWarningStore";
tmp2.persistKey = "ParentalConsentWarningStore";
let items = [
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
tmp2 = new tmp2(require("dispatcher"), {
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
    let c7 = null;
    tmp2.persist();
  },
  LOGOUT: function handleLogout() {
    let c5 = null;
    let c6 = null;
    let c7 = null;
    tmp2.persist();
  }
});
let closure_8 = tmp2;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningStore.tsx");

export default tmp2;
