// Module ID: 12508
// Function ID: 95835
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12508 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
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
      closure_0 = tmp;
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = importDefault(dependencyMap[6]);
let closure_7 = importDefault(dependencyMap[7]);
let closure_8 = importDefault(dependencyMap[8]);
let closure_9 = [];
let closure_10 = false;
let tmp2 = (PersistedStore) => {
  class FriendGroupsStore {
    constructor() {
      self = this;
      tmp = FriendGroupsStore(this, FriendGroupsStore);
      obj = closure_3(FriendGroupsStore);
      tmp2 = closure_2;
      if (closure_11()) {
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
  let closure_0 = FriendGroupsStore;
  callback2(FriendGroupsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(groups) {
      this.waitFor(closure_6, closure_7, closure_5, closure_8);
      if (null != groups) {
        groups = groups.groups;
        if (null == groups) {
          groups = [];
        }
        const isInitialized = groups.isInitialized;
        let closure_10 = null != isInitialized && isInitialized;
      }
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getGroups",
    value() {
      return closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGroup",
    value(arg0) {
      const FriendGroupsStore = arg0;
      const found = closure_9.find((id) => id.id === id);
      let tmp2 = null;
      if (null != found) {
        tmp2 = found;
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGroupIds",
    value() {
      return closure_9.map((id) => id.id);
    }
  };
  items[4] = {
    key: "getUserGroups",
    value(arg0) {
      const FriendGroupsStore = arg0;
      return closure_9.filter((userIds) => {
        userIds = userIds.userIds;
        return userIds.includes(userIds);
      });
    }
  };
  items[5] = {
    key: "isGroupEmpty",
    value(arg0) {
      const group = this.getGroup(arg0);
      let tmp2 = null == group;
      if (!tmp2) {
        tmp2 = 0 === group.userIds.length;
      }
      return tmp2;
    }
  };
  items[6] = {
    key: "isInitialized",
    value() {
      return closure_10;
    }
  };
  items[7] = {
    key: "getState",
    value() {
      return { groups: closure_9, isInitialized: closure_10 };
    }
  };
  return callback(FriendGroupsStore, items);
}(importDefault(dependencyMap[9]).PersistedStore);
tmp2.displayName = "FriendGroupsStore";
tmp2.persistKey = "FriendGroupsStoreV2";
tmp2 = new tmp2(importDefault(dependencyMap[10]), {
  POST_CONNECTION_OPEN: function handleInitializeFriendGroups() {
    if (!closure_10) {
      if (arr.length <= 0) {
        const arr = [];
        closure_10 = true;
      }
    }
    return false;
  },
  CREATE_FRIEND_GROUP: function handleCreateFriendGroup(groupId) {
    groupId = groupId.groupId;
    let closure_0 = groupId;
    let flag = !arr.some((id) => id.id === groupId);
    if (flag) {
      const obj = { id: groupId, name: groupId.name, userIds: [] };
      const arr = arr.push(obj);
      flag = true;
    }
    return flag;
  },
  UPDATE_FRIEND_GROUP: function handleUpdateFriendGroup(groupId) {
    groupId = groupId.groupId;
    const findIndexResult = arr.findIndex((id) => id.id === groupId);
    let flag = -1 !== findIndexResult;
    if (flag) {
      const obj = {};
      const merged = Object.assign(arr[findIndexResult]);
      obj["name"] = groupId.name;
      arr[findIndexResult] = obj;
      flag = true;
    }
    return flag;
  },
  DELETE_FRIEND_GROUP: function handleDeleteFriendGroup(groupId) {
    groupId = groupId.groupId;
    const found = arr.filter((id) => id.id !== groupId);
    return found.length !== found.length;
  },
  REORDER_FRIEND_GROUPS: function handleReorderFriendGroups(groupIds) {
    let iter2;
    const items = [];
    const tmp = _createForOfIteratorHelperLoose(groupIds.groupIds);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = map.get(iter.value);
        if (null != value) {
          let arr = items.push(value);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    let flag = items.length === arr.length;
    if (flag) {
      arr = items;
      flag = true;
    }
    return flag;
  },
  ADD_USERS_TO_GROUP: function handleAddUsersToGroup(arg0) {
    let userIds;
    ({ groupId: closure_0, userIds } = arg0);
    let closure_1;
    const findIndexResult = arr.findIndex((id) => id.id === closure_0);
    if (-1 === findIndexResult) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(arr[findIndexResult].userIds);
      closure_1 = set;
      const found = userIds.filter((arg0) => !set.has(arg0));
      let flag = 0 !== found.length;
      if (flag) {
        const obj = {};
        const merged = Object.assign(tmp11);
        const items = [];
        HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(tmp11.userIds, 0));
        obj["userIds"] = items;
        arr[findIndexResult] = obj;
        flag = true;
      }
      return flag;
    }
  },
  REMOVE_USERS_FROM_GROUP: function handleRemoveUsersFromGroup(arg0) {
    let userIds;
    ({ groupId: closure_0, userIds } = arg0);
    let closure_1;
    const findIndexResult = arr.findIndex((id) => id.id === closure_0);
    if (-1 === findIndexResult) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(userIds);
      closure_1 = set;
      userIds = tmp7.userIds;
      const found = userIds.filter((arg0) => !set.has(arg0));
      let flag = found.length !== tmp7.userIds.length;
      if (flag) {
        const obj = {};
        const merged = Object.assign(tmp7);
        obj["userIds"] = found;
        arr[findIndexResult] = obj;
        flag = true;
      }
      return flag;
    }
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/friend_groups/FriendGroupsStore.tsx");

export default tmp2;
