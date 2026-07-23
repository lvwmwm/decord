// Module ID: 12627
// Function ID: 98019
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 6902, 5592, 3767, 1849, 566, 686, 2]

// Module 12627 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let _isNativeReflectConstruct = iterable;
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
      _isNativeReflectConstruct = tmp;
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
let closure_9 = [];
let c10 = false;
let tmp2 = ((PersistedStore) => {
  class FriendGroupsStore {
    constructor() {
      self = this;
      tmp = FriendGroupsStore(this, FriendGroupsStore);
      obj = outer1_3(FriendGroupsStore);
      tmp2 = outer1_2;
      if (outer1_11()) {
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
  callback2(FriendGroupsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(groups) {
      this.waitFor(outer1_6, outer1_7, outer1_5, outer1_8);
      if (null != groups) {
        groups = groups.groups;
        if (null == groups) {
          groups = [];
        }
        const outer1_9 = groups;
        const isInitialized = groups.isInitialized;
        const outer1_10 = null != isInitialized && isInitialized;
      }
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getGroups",
    value() {
      return outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGroup",
    value(arg0) {
      let _isNativeReflectConstruct = arg0;
      const found = outer1_9.find((id) => id.id === _isNativeReflectConstruct);
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
      return outer1_9.map((id) => id.id);
    }
  };
  items[4] = {
    key: "getUserGroups",
    value(arg0) {
      let _isNativeReflectConstruct = arg0;
      return outer1_9.filter((userIds) => {
        userIds = userIds.userIds;
        return userIds.includes(_isNativeReflectConstruct);
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
      return outer1_10;
    }
  };
  items[7] = {
    key: "getState",
    value() {
      return { groups: outer1_9, isInitialized: outer1_10 };
    }
  };
  return callback(FriendGroupsStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "FriendGroupsStore";
tmp2.persistKey = "FriendGroupsStoreV2";
tmp2 = new tmp2(require("dispatcher"), {
  POST_CONNECTION_OPEN: function handleInitializeFriendGroups() {
    if (!c10) {
      if (arr.length <= 0) {
        arr = [];
        c10 = true;
      }
    }
    return false;
  },
  CREATE_FRIEND_GROUP: function handleCreateFriendGroup(groupId) {
    groupId = groupId.groupId;
    let flag = !arr.some((id) => id.id === groupId);
    if (flag) {
      const obj = { id: groupId, name: groupId.name, userIds: [] };
      arr = arr.push(obj);
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
    found = found.filter((id) => id.id !== groupId);
    return found.length !== found.length;
  },
  REORDER_FRIEND_GROUPS: function handleReorderFriendGroups(groupIds) {
    let iter2;
    let items = [];
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
    let flag = items.length === items.length;
    if (flag) {
      flag = true;
    }
    return flag;
  },
  ADD_USERS_TO_GROUP: function handleAddUsersToGroup(arg0) {
    let _isNativeReflectConstruct;
    let userIds;
    ({ groupId: _isNativeReflectConstruct, userIds } = arg0);
    let set;
    const findIndexResult = arr.findIndex((id) => id.id === _isNativeReflectConstruct);
    if (-1 === findIndexResult) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(tmp11.userIds);
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
    let _isNativeReflectConstruct;
    let userIds;
    ({ groupId: _isNativeReflectConstruct, userIds } = arg0);
    let set;
    const findIndexResult = arr.findIndex((id) => id.id === _isNativeReflectConstruct);
    if (-1 === findIndexResult) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(userIds);
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/friend_groups/FriendGroupsStore.tsx");

export default tmp2;
