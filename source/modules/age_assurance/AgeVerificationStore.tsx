// Module ID: 7562
// Function ID: 60504
// Name: _isNativeReflectConstruct
// Dependencies: [496238592, 131072, 401604608, 31, 27, 1353, 4944, 1354, 33, 4126]

// Module 7562 (_isNativeReflectConstruct)
import module_31 from "module_31";
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getStorageKey() {
  const currentUser = currentUser.getCurrentUser();
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
  let closure_11 = "unchecked";
  let closure_12 = null;
}
function persist() {
  const tmp = getStorageKey();
  if (null != tmp) {
    const Storage = arg1(dependencyMap[6]).Storage;
    const obj = { reactiveCheckStatus: closure_11, reactiveCheckMissAt: closure_12 };
    const result = Storage.set(tmp, obj);
  }
}
function loadFromStorage() {
  const tmp = getStorageKey();
  if (null != tmp) {
    const Storage = arg1(dependencyMap[6]).Storage;
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
          tmp10 = Date.now() - tmp9 >= closure_8;
        }
        if (tmp10) {
          resetToDefaults();
        } else {
          let closure_11 = str2;
          let closure_12 = tmp9;
        }
      }
    }
    resetToDefaults();
  } else {
    resetToDefaults();
  }
}
function isMissWithinTTL() {
  let tmp = "miss" === closure_11;
  if (tmp) {
    tmp = null != closure_12;
  }
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() - closure_12 < closure_8;
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_8 = 86400000;
let closure_9 = null;
let closure_10 = false;
let closure_11 = "unchecked";
let closure_12 = null;
let tmp2 = (Store) => {
  class AgeVerificationStore {
    constructor() {
      self = this;
      tmp = closure_2(this, AgeVerificationStore);
      obj = module_31(AgeVerificationStore);
      tmp2 = closure_4;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = module_31;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, module_31(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = AgeVerificationStore;
  callback2(AgeVerificationStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(_isNativeReflectConstruct);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "loading",
    get() {
      return closure_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "methods",
    get() {
      return closure_9;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getReactiveCheckStatus",
    value() {
      return closure_11;
    }
  };
  items[4] = {
    key: "getReactiveCheckMiss",
    value() {
      return callback4();
    }
  };
  items[5] = {
    key: "getReactiveCheckPassed",
    value() {
      return "passed" === closure_11;
    }
  };
  items[6] = {
    key: "shouldCallReactiveCheck",
    value() {
      let tmp = "passed" !== closure_11;
      if (tmp) {
        let tmp3 = "suppress" !== closure_11;
        if (tmp3) {
          tmp3 = !callback4();
        }
        tmp = tmp3;
      }
      return tmp;
    }
  };
  return callback(AgeVerificationStore, items);
}(require("GUILD_EVENT_MAX_NAME_LENGTH").Store);
tmp2.displayName = "AgeVerificationStore";
tmp2 = new tmp2(require("module_33"), {
  AGE_VERIFICATION_METHODS_LOAD_START: function handleAgeVerificationMethodsLoadStart() {
    let closure_10 = true;
  },
  AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function handleAgeVerificationMethodsLoadSuccess(methods) {
    methods = methods.methods;
    let closure_10 = false;
  },
  AGE_VERIFICATION_METHODS_LOAD_FAILURE: function handleAgeVerificationMethodsLoadFailure() {
    let closure_10 = false;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    loadFromStorage();
  },
  AGE_VERIFICATION_CHECK_RESULT_SET: function handleReactiveCheckResultSet(status) {
    status = status.status;
    let closure_11 = status;
    let timestamp = null;
    if ("miss" === status) {
      const _Date = Date;
      timestamp = Date.now();
    }
    let closure_12 = timestamp;
    persist();
  },
  AGE_VERIFICATION_RESET: function handleAgeVerificationReset() {
    let closure_11 = "suppress";
    let closure_12 = null;
    persist();
  }
});
const result = _createForOfIteratorHelperLoose.fileFinishedImporting("modules/age_assurance/AgeVerificationStore.tsx");

export default tmp2;
