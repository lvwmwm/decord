// Module ID: 4161
// Function ID: 35207
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4161 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const Storage = arg1(dependencyMap[8]).Storage;
  let obj = Storage.get(closure_12);
  if (null == obj) {
    obj = {};
  }
  return obj;
}
function saveActiveLaunchOptionIds() {
  const Storage = arg1(dependencyMap[8]).Storage;
  const obj = {};
  const merged = Object.assign(getSavedData());
  obj["activeLaunchOptionIds"] = closure_18;
  const result = Storage.set(closure_12, obj);
}
function saveActiveLibraryApplicationBranchIds() {
  const Storage = arg1(dependencyMap[8]).Storage;
  const obj = {};
  const merged = Object.assign(getSavedData());
  obj["activeLibraryApplicationBranchIds"] = closure_17;
  const result = Storage.set(closure_12, obj);
}
function setLibraryApplications(libraryApplications) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(libraryApplications);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = closure_9;
      let fromServer = closure_9.createFromServer(iter.value);
      let tmp4 = closure_0;
      let tmp5 = closure_3;
      let obj = closure_0(closure_3[9]);
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
  const comboId = arg1(dependencyMap[9]).getComboId(fromServer.id, fromServer.branchId);
  closure_14[comboId] = fromServer;
  set.delete(comboId);
}
function _getLibraryApplication(applicationId, branchId) {
  const comboId = branchId(dependencyMap[9]).getComboId(applicationId, branchId);
  let tmp2 = closure_14[comboId];
  if (null == tmp2) {
    tmp2 = closure_15[comboId];
  }
  return tmp2;
}
function _getAllLibraryApplications() {
  const merged = Object.assign(closure_15);
  const merged1 = Object.assign(closure_14);
  return {};
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const LibraryApplicationFlags = arg1(dependencyMap[7]).LibraryApplicationFlags;
let closure_12 = "LibraryApplicationStore";
let closure_13 = false;
let closure_14 = {};
let closure_15 = {};
const set = new Set();
let closure_17 = {};
let closure_18 = {};
let closure_19 = false;
let tmp3 = (Store) => {
  class LibraryApplicationStore {
    constructor() {
      self = this;
      tmp = closure_4(this, LibraryApplicationStore);
      obj = closure_7(LibraryApplicationStore);
      tmp2 = closure_6;
      if (closure_20()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = LibraryApplicationStore;
  callback2(LibraryApplicationStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10);
      const Storage = LibraryApplicationStore(closure_3[8]).Storage;
      const value = Storage.get(closure_12);
      if (null != value) {
        if (null == value.activeLaunchOptionIds) {
          callback5();
        } else {
          const activeLaunchOptionIds = value.activeLaunchOptionIds;
        }
        if (null == value.activeLibraryApplicationBranchIds) {
          callback6();
        } else {
          let closure_17 = value.activeLibraryApplicationBranchIds;
        }
      }
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "libraryApplications",
    get() {
      return function getLibraryApplicationsFiltered(arg0) {
        const tmp = callback();
        const keys = Object.keys(tmp);
        const item = keys.forEach((arg0) => {
          if (!arg0(tmp[arg0])) {
            delete r1[r2];
          }
        });
        return tmp;
      }((isHidden) => !isHidden.isHidden());
    }
  };
  items[1] = obj;
  obj = {
    key: "getAllLibraryApplications",
    value() {
      return callback8();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasLibraryApplication",
    value() {
      return Object.keys(callback8()).length > 0;
    }
  };
  items[4] = {
    key: "hasApplication",
    value(arg0, arg1) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      const obj = callback7(arg0, arg1);
      let tmp = null != obj;
      if (tmp) {
        let result = !(!flag && obj.isHidden());
        if (result) {
          result = LibraryApplicationStore(closure_3[9]).isUserEntitledToLibraryApplication(obj);
          const obj2 = LibraryApplicationStore(closure_3[9]);
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
      const tmp = callback7(arg0, arg1);
      let tmp2 = tmp;
      if (flag) {
        tmp2 = tmp;
        if (null != tmp) {
          let tmp6 = null;
          if (obj.isUserEntitledToLibraryApplication(tmp)) {
            tmp6 = tmp;
          }
          tmp2 = tmp6;
          const obj = LibraryApplicationStore(closure_3[9]);
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
      if (null != closure_17[arg0]) {
        const comboId = LibraryApplicationStore(closure_3[9]).getComboId(arg0, tmp);
        let obj2 = closure_14[comboId];
        if (null == obj2) {
          obj2 = closure_15[comboId];
        }
        if (null != obj2) {
          if (obj3.isUserEntitledToLibraryApplication(obj2)) {
            return obj2;
          }
          const obj3 = LibraryApplicationStore(closure_3[9]);
        }
        const obj = LibraryApplicationStore(closure_3[9]);
      }
      const tmp9 = callback8();
      for (const key10030 in tmp9) {
        let tmp14 = key10030;
        if (tmp9[key10030].id !== arg0) {
          continue;
        } else {
          let obj4 = tmp9[key10030];
          let tmp10 = closure_0;
          let tmp11 = closure_3;
          let obj5 = closure_0(closure_3[9]);
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
      return set.has(LibraryApplicationStore(closure_3[9]).getComboId(arg0, arg1));
    }
  };
  items[8] = {
    key: "getActiveLaunchOptionId",
    value(arg0, arg1) {
      const obj = LibraryApplicationStore(closure_3[9]);
      return closure_18[obj.getComboId(obj, arg0, arg1)];
    }
  };
  items[9] = {
    key: "fetched",
    get() {
      return closure_13;
    }
  };
  items[10] = {
    key: "entitledBranchIds",
    get() {
      const tmp = callback(closure_3[11]);
      const values = callback(closure_3[11])(callback8()).values();
      const found = values.filter((libraryApplication) => callback(closure_3[9]).isUserEntitledToLibraryApplication(libraryApplication));
      const tmpResult = callback(closure_3[11])(callback8());
      return found.map((branchId) => branchId.branchId).value();
    }
  };
  items[11] = {
    key: "hasRemovedLibraryApplicationThisSession",
    get() {
      return closure_19;
    }
  };
  items[12] = {
    key: "whenInitialized",
    value(arg0) {
      const LibraryApplicationStore = arg0;
      const result = this.addConditionalChangeListener(() => {
        if (closure_13) {
          const _setImmediate = setImmediate;
          setImmediate(arg0);
          return false;
        }
      });
    }
  };
  return callback(LibraryApplicationStore, items);
}(importDefault(dependencyMap[12]).Store);
tmp3.displayName = "LibraryApplicationStore";
tmp3 = new tmp3(importDefault(dependencyMap[13]), {
  LOGOUT: function handleLogout() {
    let closure_13 = false;
  },
  LIBRARY_FETCH_SUCCESS: function handleFetchSuccess(libraryApplications) {
    let closure_14 = {};
    setLibraryApplications(libraryApplications.libraryApplications);
    let closure_13 = true;
  },
  SKU_PURCHASE_SUCCESS: function handlePurchaseSuccess(libraryApplications) {
    setLibraryApplications(libraryApplications.libraryApplications);
  },
  LIBRARY_APPLICATION_FLAGS_UPDATE_START: function handleFlagsUpdateStart(flags) {
    let applicationId;
    let branchId;
    ({ applicationId, branchId } = flags);
    const comboId = arg1(dependencyMap[9]).getComboId(applicationId, branchId);
    const obj2 = _getLibraryApplication(applicationId, branchId);
    let hasFlagResult = null != obj2 && !obj2.isHidden();
    if (hasFlagResult) {
      hasFlagResult = importAll(dependencyMap[10]).hasFlag(flags.flags, LibraryApplicationFlags.HIDDEN);
      const obj3 = importAll(dependencyMap[10]);
    }
    if (hasFlagResult) {
      let closure_19 = true;
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
    closure_18[arg1(dependencyMap[9]).getComboId(applicationId, branchId)] = launchOptionId;
    saveActiveLaunchOptionIds();
  },
  LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function handleActiveBranchUpdate(arg0) {
    let applicationId;
    let branchId;
    ({ applicationId, branchId } = arg0);
    if (closure_17[applicationId] === branchId) {
      return false;
    } else {
      closure_17[applicationId] = branchId;
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
        let tmp2 = closure_0;
        let tmp3 = closure_3;
        let obj = closure_0(closure_3[9]);
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
const result = arg1(dependencyMap[14]).fileFinishedImporting("stores/LibraryApplicationStore.tsx");

export default tmp3;
