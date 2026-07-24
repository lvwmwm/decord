// Module ID: 14790
// Function ID: 112797
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 14790 (_isNativeReflectConstruct)
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
let c5 = false;
let tmp2 = ((PersistedStore) => {
  class ParentalConsentStore {
    constructor() {
      self = this;
      tmp = ParentalConsentStore(this, ParentalConsentStore);
      obj = outer1_3(ParentalConsentStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
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
  callback2(ParentalConsentStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(shouldShowGuardianConnect) {
      let prop;
      if (null != shouldShowGuardianConnect) {
        prop = shouldShowGuardianConnect.shouldShowGuardianConnect;
      }
      const outer1_5 = null != prop && prop;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getShouldShowGuardianConnect",
    value() {
      return outer1_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { shouldShowGuardianConnect: outer1_5 };
    }
  };
  items[2] = obj;
  return callback(ParentalConsentStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "ParentalConsentStore";
tmp2.persistKey = "ParentalConsentStore";
tmp2 = new tmp2(require("dispatcher"), {
  GUARDIAN_CONNECT_REQUIRED: function handleGuardianConnectRequired(shouldShowGuardianConnect) {
    let closure_5 = true === shouldShowGuardianConnect.shouldShowGuardianConnect;
    tmp2.persist();
  },
  GUARDIAN_CONNECT_CLEARED: function handleGuardianConnectCleared() {
    let c5 = false;
    tmp2.persist();
  },
  NUF_COMPLETE: function handleNUFCompleted() {
    let c5 = false;
    tmp2.persist();
  }
});
let closure_6 = tmp2;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/parent_tools/ParentalConsentStore.tsx");

export default tmp2;
