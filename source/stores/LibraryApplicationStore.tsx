// Module ID: 4165
// Function ID: 35240
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4166, 1194, 653, 587, 4174, 1360, 22, 566, 686, 2]

// Module 4165 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { LibraryApplicationFlags } from "ME";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getSavedData() {
  const Storage = require(587) /* Storage */.Storage;
  let obj = Storage.get(LibraryApplicationStore);
  if (null == obj) {
    obj = {};
  }
  return obj;
}
function saveActiveLaunchOptionIds() {
  const Storage = require(587) /* Storage */.Storage;
  const obj = {};
  const merged = Object.assign(getSavedData());
  obj["activeLaunchOptionIds"] = closure_18;
  const result = Storage.set(LibraryApplicationStore, obj);
}
function saveActiveLibraryApplicationBranchIds() {
  const Storage = require(587) /* Storage */.Storage;
  const obj = {};
  const merged = Object.assign(getSavedData());
  obj["activeLibraryApplicationBranchIds"] = closure_17;
  const result = Storage.set(LibraryApplicationStore, obj);
}
function setLibraryApplications(libraryApplications) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(libraryApplications);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = closure_9;
      let fromServer = closure_9.createFromServer(iter.value);
      let tmp4 = require;
      let tmp5 = dependencyMap;
      let obj = require(4174) /* convertToTransitionState */;
      let tmp6 = closure_14;
      closure_14[obj.getComboId(fromServer.id, fromServer.branchId)] = fromServer;
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
function handleLibraryApplicationUpdate(libraryApplication) {
  const fromServer = closure_9.createFromServer(libraryApplication.libraryApplication);
  const comboId = require(4174) /* convertToTransitionState */.getComboId(fromServer.id, fromServer.branchId);
  closure_14[comboId] = fromServer;
  set.delete(comboId);
}
function _getLibraryApplication(applicationId, branchId) {
  const comboId = require(4174) /* convertToTransitionState */.getComboId(applicationId, branchId);
  let tmp2 = table[comboId];
  if (null == tmp2) {
    tmp2 = table2[comboId];
  }
  return tmp2;
}
function _getAllLibraryApplications() {
  const merged = Object.assign(closure_15);
  const merged1 = Object.assign(closure_14);
  return {};
}
const LibraryApplicationStore = "LibraryApplicationStore";
let c13 = false;
let closure_14 = {};
let closure_15 = {};
let set = new Set();
let closure_17 = {};
let closure_18 = {};
let c19 = false;
let tmp3 = ((Store) => {
  class LibraryApplicationStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, LibraryApplicationStore);
      obj = outer1_7(LibraryApplicationStore);
      tmp2 = outer1_6;
      if (outer1_20()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(LibraryApplicationStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10);
      const Storage = LibraryApplicationStore(outer1_3[8]).Storage;
      const value = Storage.get(outer1_12);
      if (null != value) {
        if (null == value.activeLaunchOptionIds) {
          outer1_24();
        } else {
          const outer1_18 = value.activeLaunchOptionIds;
        }
        if (null == value.activeLibraryApplicationBranchIds) {
          outer1_25();
        } else {
          const outer1_17 = value.activeLibraryApplicationBranchIds;
        }
      }
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "libraryApplications",
    get() {
      return (function getLibraryApplicationsFiltered(arg0) {
        let closure_0 = arg0;
        const tmp = outer2_28();
        let closure_1 = tmp;
        const keys = Object.keys(tmp);
        const item = keys.forEach((arg0) => {
          if (!callback(tmp[arg0])) {
            delete tmp[tmp2];
          }
        });
        return tmp;
      })((isHidden) => !isHidden.isHidden());
    }
  };
  items[1] = obj;
  obj = {
    key: "getAllLibraryApplications",
    value() {
      return outer1_28();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasLibraryApplication",
    value() {
      return Object.keys(outer1_28()).length > 0;
    }
  };
  items[4] = {
    key: "hasApplication",
    value(arg0, arg1) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      const obj = outer1_27(arg0, arg1);
      let tmp = null != obj;
      if (tmp) {
        let result = !(!flag && obj.isHidden());
        if (result) {
          result = LibraryApplicationStore(outer1_3[9]).isUserEntitledToLibraryApplication(obj);
          const obj2 = LibraryApplicationStore(outer1_3[9]);
        }
        tmp = result;
        const tmp2 = !flag && obj.isHidden();
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getLibraryApplication",
    value(arg0, arg1) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      const tmp = outer1_27(arg0, arg1);
      let tmp2 = tmp;
      if (flag) {
        tmp2 = tmp;
        if (null != tmp) {
          let tmp6 = null;
          if (obj.isUserEntitledToLibraryApplication(tmp)) {
            tmp6 = tmp;
          }
          tmp2 = tmp6;
          obj = LibraryApplicationStore(outer1_3[9]);
        }
      }
      return tmp2;
    }
  };
  items[6] = {
    key: "getActiveLibraryApplication",
    value(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      if (null != outer1_17[arg0]) {
        const comboId = LibraryApplicationStore(outer1_3[9]).getComboId(arg0, tmp);
        let obj2 = outer1_14[comboId];
        if (null == obj2) {
          obj2 = outer1_15[comboId];
        }
        if (null != obj2) {
          if (obj3.isUserEntitledToLibraryApplication(obj2)) {
            return obj2;
          }
          obj3 = LibraryApplicationStore(outer1_3[9]);
        }
        const obj = LibraryApplicationStore(outer1_3[9]);
      }
      const tmp9 = outer1_28();
      for (const key10030 in tmp9) {
        let tmp14 = key10030;
        if (tmp9[key10030].id !== arg0) {
          continue;
        } else {
          let obj4 = tmp9[key10030];
          let tmp10 = LibraryApplicationStore;
          let tmp11 = outer1_3;
          let obj5 = LibraryApplicationStore(outer1_3[9]);
          let tmp12 = obj4;
          if (!obj5.isUserEntitledToLibraryApplication(obj4)) {
            continue;
          } else {
            if (!flag) {
              let tmp13 = obj4;
            }
            return obj4;
          }
          continue;
        }
        continue;
      }
    }
  };
  items[7] = {
    key: "isUpdatingFlags",
    value(arg0, arg1) {
      return outer1_16.has(LibraryApplicationStore(outer1_3[9]).getComboId(arg0, arg1));
    }
  };
  items[8] = {
    key: "getActiveLaunchOptionId",
    value(arg0, arg1) {
      const obj = LibraryApplicationStore(outer1_3[9]);
      return outer1_18[obj.getComboId(obj, arg0, arg1)];
    }
  };
  items[9] = {
    key: "fetched",
    get() {
      return outer1_13;
    }
  };
  items[10] = {
    key: "entitledBranchIds",
    get() {
      const tmp = outer1_1(outer1_3[11]);
      const values = outer1_1(outer1_3[11])(outer1_28()).values();
      const found = values.filter((libraryApplication) => LibraryApplicationStore(outer2_3[9]).isUserEntitledToLibraryApplication(libraryApplication));
      const tmpResult = outer1_1(outer1_3[11])(outer1_28());
      return found.map((branchId) => branchId.branchId).value();
    }
  };
  items[11] = {
    key: "hasRemovedLibraryApplicationThisSession",
    get() {
      return outer1_19;
    }
  };
  items[12] = {
    key: "whenInitialized",
    value(arg0) {
      let closure_0 = arg0;
      const result = this.addConditionalChangeListener(() => {
        if (outer2_13) {
          const _setImmediate = setImmediate;
          setImmediate(closure_0);
          return false;
        }
      });
    }
  };
  return callback(LibraryApplicationStore, items);
})(require("initialize").Store);
tmp3.displayName = "LibraryApplicationStore";
tmp3 = new tmp3(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    let c13 = false;
  },
  LIBRARY_FETCH_SUCCESS: function handleFetchSuccess(libraryApplications) {
    let closure_14 = {};
    setLibraryApplications(libraryApplications.libraryApplications);
    let c13 = true;
  },
  SKU_PURCHASE_SUCCESS: function handlePurchaseSuccess(libraryApplications) {
    setLibraryApplications(libraryApplications.libraryApplications);
  },
  LIBRARY_APPLICATION_FLAGS_UPDATE_START: function handleFlagsUpdateStart(flags) {
    let applicationId;
    let branchId;
    ({ applicationId, branchId } = flags);
    const comboId = require(4174) /* convertToTransitionState */.getComboId(applicationId, branchId);
    const obj2 = _getLibraryApplication(applicationId, branchId);
    let hasFlagResult = null != obj2 && !obj2.isHidden();
    if (hasFlagResult) {
      hasFlagResult = importAll(1360).hasFlag(flags.flags, LibraryApplicationFlags.HIDDEN);
      const obj3 = importAll(1360);
    }
    if (hasFlagResult) {
      let c19 = true;
    }
    set.add(comboId);
  },
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: handleLibraryApplicationUpdate,
  LIBRARY_APPLICATION_UPDATE: handleLibraryApplicationUpdate,
  LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: function handleActiveLaunchOptionIdUpdate(arg0) {
    let applicationId;
    let branchId;
    let launchOptionId;
    ({ applicationId, branchId, launchOptionId } = arg0);
    closure_18[require(4174) /* convertToTransitionState */.getComboId(applicationId, branchId)] = launchOptionId;
    saveActiveLaunchOptionIds();
  },
  LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function handleActiveBranchUpdate(arg0) {
    let applicationId;
    let branchId;
    ({ applicationId, branchId } = arg0);
    if (table3[applicationId] === branchId) {
      return false;
    } else {
      table3[applicationId] = branchId;
      saveActiveLibraryApplicationBranchIds();
    }
  },
  LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: function handleTestModeEnabled(libraryApplications) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(libraryApplications.libraryApplications);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = require;
        let tmp3 = dependencyMap;
        let obj = require(4174) /* convertToTransitionState */;
        let tmp4 = closure_15;
        closure_15[obj.getComboId(value.id, value.branchId)] = value;
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  DEVELOPER_TEST_MODE_RESET: function handleTestModeDisabled() {
    let closure_15 = {};
  }
});
let result = set.fileFinishedImporting("stores/LibraryApplicationStore.tsx");

export default tmp3;
