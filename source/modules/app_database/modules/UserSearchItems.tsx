// Module ID: 6895
// Function ID: 54910
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 6910, 3986, 2, 6, 7, 15, 17, 18, 27, 6913]

// Module 6895 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import asyncGeneratorStep from "asyncGeneratorStep";
import enforcing from "enforcing";
import closure_6 from "enforcing";
import result2 from "result2";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import { RelationshipTypes } from "_possibleConstructorReturn";
import importDefaultResult from "_getPrototypeOf";
import ProcessUtils from "ProcessUtils";

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
importDefaultResult = new importDefaultResult("UserSearchItems");
let closure_12 = false;
let tmp4 = () => {
  class UserSearchItems {
    constructor() {
      f54917 = this;
      tmp = asyncGeneratorStep(this, UserSearchItems);
      this.actions = {
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        WRITE_CACHES(arg0, arg1) {
              return self.handleWriteCaches(arg1);
            }
      };
      return;
    }
  }
  const importDefault = UserSearchItems;
  let obj = { key: "getAll" };
  let closure_0 = callback(async () => {
    const nowResult = performance.now();
    const userSearchItemsResult = callback(closure_2[9]).userSearchItems();
    if (null == userSearchItemsResult) {
      return [];
    } else {
      const arr = yield userSearchItemsResult.getMany();
      const _performance = performance;
      const _HermesInternal = HermesInternal;
      closure_11.log("asynchronously loaded in " + performance.now() - nowResult + "ms (userSearchItems: " + arr.length + ")");
      return arr;
    }
    const obj = callback(closure_2[9]);
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
      return !closure_12;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handlePostConnectionOpen",
    value() {
      let closure_12 = true;
    }
  };
  items[4] = {
    key: "handleWriteCaches",
    value(arg0) {
      let iter3;
      let iter6;
      let obj = {};
      const tmp = callback3(friendIDs.getFriendIDs());
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp2 = _defineProperties;
          let user = _defineProperties.getUser(value);
          if (null != user) {
            let tmp15 = closure_0;
            let tmp16 = closure_2;
            let obj5 = closure_0(closure_2[10]);
            let names = obj5.getNames(user);
            obj = { id: value };
            let tmp18 = closure_10;
            obj.type = closure_10.FRIEND;
            obj.user = user;
            ({ names: obj6.names, nick: obj6.nick } = names);
            let tmp19 = result2;
            let userAffinity = result2.getUserAffinity(value);
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
      const gameRelationships = gameRelationships.getGameRelationships();
      const values = gameRelationships.values();
      const tmp7 = callback3(values.filter((type) => type.type === constants.FRIEND));
      const iter4 = tmp7();
      let iter5 = iter4;
      if (!iter4.done) {
        do {
          value = iter5.value;
          let tmp8 = _defineProperties;
          let user1 = _defineProperties.getUser(value.id);
          if (null != user1) {
            let tmp21 = closure_0;
            let tmp22 = closure_2;
            let obj7 = closure_0(closure_2[10]);
            let names1 = obj7.getNames(user1);
            obj = { id: value.id };
            let tmp24 = closure_10;
            obj.type = closure_10.FRIEND;
            obj.user = user1;
            ({ names: obj8.names, nick: obj8.nick } = names1);
            let tmp25 = result2;
            let userAffinity1 = result2.getUserAffinity(value.id);
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
      const result = UserSearchItems(closure_2[9]).userSearchItemsTransaction(arg0);
      result.delete();
      result.putAll(Object.values(obj));
    }
  };
  return callback2(UserSearchItems, items);
}();
tmp4 = new tmp4();
const result = ProcessUtils.fileFinishedImporting("modules/app_database/modules/UserSearchItems.tsx");

export default tmp4;
