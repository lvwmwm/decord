// Module ID: 6899
// Function ID: 54952
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6, 7, 6900, 6901, 3767, 1849, 653, 3, 1882, 6903, 2]

// Module 6899 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";
import importDefaultResult from "_isNativeReflectConstruct";

const require = arg1;
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
importDefaultResult = new importDefaultResult("UserSearchItems");
let c12 = false;
let tmp4 = (() => {
  class UserSearchItems {
    constructor() {
      self = this;
      tmp = outer1_4(this, UserSearchItems);
      this.actions = {
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        WRITE_CACHES(arg0, arg1) {
              return self.handleWriteCaches(arg1);
            }
      };
      return;
    }
  }
  let obj = { key: "getAll" };
  let closure_0 = callback(async () => {
    const nowResult = performance.now();
    const userSearchItemsResult = UserSearchItems(outer2_2[9]).userSearchItems();
    if (null == userSearchItemsResult) {
      return [];
    } else {
      const arr = yield userSearchItemsResult.getMany();
      const _performance = performance;
      const _HermesInternal = HermesInternal;
      outer2_11.log("asynchronously loaded in " + performance.now() - nowResult + "ms (userSearchItems: " + arr.length + ")");
      return arr;
    }
    const obj = UserSearchItems(outer2_2[9]);
  });
  obj.value = function getAll() {
    return callback(...arguments);
  };
  const items = [obj, , , , ];
  obj = {
    key: "resetInMemoryState",
    value() {

    }
  };
  items[1] = obj;
  obj = {
    key: "shouldUseCache",
    get() {
      return !outer1_12;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handlePostConnectionOpen",
    value() {
      const outer1_12 = true;
    }
  };
  items[4] = {
    key: "handleWriteCaches",
    value(arg0) {
      let iter3;
      let iter6;
      let obj = {};
      const tmp = outer1_13(outer1_8.getFriendIDs());
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp2 = outer1_9;
          let user = outer1_9.getUser(value);
          if (null != user) {
            let tmp15 = callback;
            let tmp16 = outer1_2;
            let obj5 = callback(outer1_2[10]);
            let names = obj5.getNames(user);
            obj = { id: value };
            let tmp18 = outer1_10;
            obj.type = outer1_10.FRIEND;
            obj.user = user;
            ({ names: obj6.names, nick: obj6.nick } = names);
            let tmp19 = outer1_7;
            let userAffinity = outer1_7.getUserAffinity(value);
            let prop;
            if (null != userAffinity) {
              prop = userAffinity.communicationProbability;
            }
            let num = 0;
            if (null != prop) {
              num = prop;
            }
            obj.affinity = num;
            obj[value] = obj;
            let tmp5 = prop;
            let tmp6 = userAffinity;
          }
          iter3 = tmp();
          iter2 = iter3;
        } while (!iter3.done);
      }
      const gameRelationships = outer1_6.getGameRelationships();
      const values = gameRelationships.values();
      const tmp7 = outer1_13(values.filter((type) => type.type === outer2_10.FRIEND));
      const iter4 = tmp7();
      let iter5 = iter4;
      if (!iter4.done) {
        do {
          value = iter5.value;
          let tmp8 = outer1_9;
          let user1 = outer1_9.getUser(value.id);
          if (null != user1) {
            let tmp21 = callback;
            let tmp22 = outer1_2;
            let obj7 = callback(outer1_2[10]);
            let names1 = obj7.getNames(user1);
            obj = { id: value.id };
            let tmp24 = outer1_10;
            obj.type = outer1_10.FRIEND;
            obj.user = user1;
            ({ names: obj8.names, nick: obj8.nick } = names1);
            let tmp25 = outer1_7;
            let userAffinity1 = outer1_7.getUserAffinity(value.id);
            let prop1;
            if (null != userAffinity1) {
              prop1 = userAffinity1.communicationProbability;
            }
            let num2 = 0;
            if (null != prop1) {
              num2 = prop1;
            }
            obj.affinity = num2;
            obj[value.id] = obj;
            let tmp11 = prop1;
            let tmp12 = userAffinity1;
          }
          iter6 = tmp7();
          iter5 = iter6;
        } while (!iter6.done);
      }
      const result = UserSearchItems(outer1_2[9]).userSearchItemsTransaction(arg0);
      result.delete();
      result.putAll(Object.values(obj));
    }
  };
  return callback2(UserSearchItems, items);
})();
tmp4 = new tmp4();
let result = require("_defineProperties").fileFinishedImporting("modules/app_database/modules/UserSearchItems.tsx");

export default tmp4;
