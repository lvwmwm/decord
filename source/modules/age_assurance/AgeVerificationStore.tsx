// Module ID: 7625
// Function ID: 60702
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1849, 587, 566, 686, 2]

// Module 7625 (_isNativeReflectConstruct)
import Storage from "Storage";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getStorageKey() {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  let combined = null;
  if (null != id) {
    const _HermesInternal = HermesInternal;
    combined = "AgeVerificationStore_" + id;
  }
  return combined;
}
function resetToDefaults() {
  const unchecked = "unchecked";
  let c12 = null;
}
function persist() {
  const tmp = getStorageKey();
  if (null != tmp) {
    const Storage = require(587) /* Storage */.Storage;
    const obj = { reactiveCheckStatus: unchecked, reactiveCheckMissAt: c12 };
    const result = Storage.set(tmp, obj);
  }
}
function loadFromStorage() {
  const tmp = getStorageKey();
  if (null != tmp) {
    const Storage = require(587) /* Storage */.Storage;
    const value = Storage.get(tmp);
    if (null != value) {
      if ("object" === typeof value) {
        const reactiveCheckStatus = value.reactiveCheckStatus;
        let str2 = "unchecked";
        if (null != reactiveCheckStatus) {
          str2 = reactiveCheckStatus;
        }
        const reactiveCheckMissAt = value.reactiveCheckMissAt;
        let tmp9 = null;
        if (null != reactiveCheckMissAt) {
          tmp9 = reactiveCheckMissAt;
        }
        let tmp10 = "miss" === str2 && null != tmp9;
        if (tmp10) {
          const _Date = Date;
          tmp10 = Date.now() - tmp9 >= c8;
        }
        if (tmp10) {
          resetToDefaults();
        } else {
          let c12 = tmp9;
        }
      }
    }
    resetToDefaults();
  } else {
    resetToDefaults();
  }
}
function isMissWithinTTL() {
  let tmp = "miss" === unchecked;
  if (tmp) {
    tmp = null != c12;
  }
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() - c12 < c8;
  }
  return tmp;
}
let c8 = 86400000;
let c9 = null;
let c10 = false;
let unchecked = "unchecked";
let c12 = null;
let tmp2 = ((Store) => {
  class AgeVerificationStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, AgeVerificationStore);
      obj = outer1_5(AgeVerificationStore);
      tmp2 = outer1_4;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(AgeVerificationStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "loading",
    get() {
      return outer1_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "methods",
    get() {
      return outer1_9;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getReactiveCheckStatus",
    value() {
      return outer1_11;
    }
  };
  items[4] = {
    key: "getReactiveCheckMiss",
    value() {
      return outer1_18();
    }
  };
  items[5] = {
    key: "getReactiveCheckPassed",
    value() {
      return "passed" === outer1_11;
    }
  };
  items[6] = {
    key: "shouldCallReactiveCheck",
    value() {
      let tmp = "passed" !== outer1_11;
      if (tmp) {
        let tmp3 = "suppress" !== outer1_11;
        if (tmp3) {
          tmp3 = !outer1_18();
        }
        tmp = tmp3;
      }
      return tmp;
    }
  };
  return callback(AgeVerificationStore, items);
})(require("initialize").Store);
tmp2.displayName = "AgeVerificationStore";
tmp2 = new tmp2(require("dispatcher"), {
  AGE_VERIFICATION_METHODS_LOAD_START: function handleAgeVerificationMethodsLoadStart() {
    let c10 = true;
  },
  AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function handleAgeVerificationMethodsLoadSuccess(methods) {
    methods = methods.methods;
    let c10 = false;
  },
  AGE_VERIFICATION_METHODS_LOAD_FAILURE: function handleAgeVerificationMethodsLoadFailure() {
    let c10 = false;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    loadFromStorage();
  },
  AGE_VERIFICATION_CHECK_RESULT_SET: function handleReactiveCheckResultSet(status) {
    status = status.status;
    let timestamp = null;
    if ("miss" === status) {
      const _Date = Date;
      timestamp = Date.now();
    }
    persist();
  },
  AGE_VERIFICATION_RESET: function handleAgeVerificationReset() {
    const suppress = "suppress";
    let c12 = null;
    persist();
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/age_assurance/AgeVerificationStore.tsx");

export default tmp2;
