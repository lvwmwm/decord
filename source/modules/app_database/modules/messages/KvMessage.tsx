// Module ID: 6719
// Function ID: 52243
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 1917, 1849, 653, 2]

// Module 6719 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import set from "set";
import _defineProperties from "_defineProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";

function _createForOfIteratorHelperLoose(iterable) {
  let _slicedToArray = iterable;
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
      _slicedToArray = tmp;
    }
    let c1 = 0;
    return () => {
      if (set >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        set = tmp3 + 1;
        obj.value = length[+set];
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
let tmp2 = (() => {
  class KvMessage {
    constructor() {
      tmp = outer1_1(this, KvMessage);
      return;
    }
  }
  let obj = {
    key: "fromMessage",
    value(arg0, channelId, id, connectionId) {
      const tmp = KvMessage(KvMessage.deriveMemberUsers(arg0, id), 2);
      return { id: id.id, channelId, message: id, members: tmp[0], users: tmp[1], connectionId };
    }
  };
  let items = [obj, ];
  obj = {
    key: "deriveMemberUsers",
    value(arg0, author) {
      let iter3;
      author = author.author;
      let id;
      if (null != author) {
        id = author.id;
      }
      const items = [id, ];
      const interaction = author.interaction;
      let id1;
      if (null != interaction) {
        id1 = interaction.user.id;
      }
      items[1] = id1;
      const mentions = author.mentions;
      let mapped;
      if (null != mentions) {
        mapped = mentions.map((id) => id.id);
      }
      if (null == mapped) {
        mapped = [];
      }
      HermesBuiltin.arraySpread(mapped, 2);
      const items1 = [];
      const items2 = [];
      const tmp5 = outer1_6(new Set(items));
      const iter = tmp5();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          if (null != value) {
            let tmp6 = outer1_4;
            let user = outer1_4.getUser(value);
            let tmp9 = arg0;
            let tmp8 = outer1_3;
            if (null == arg0) {
              tmp9 = outer1_5;
            }
            let trueMember = outer1_3.getTrueMember(tmp9, value);
            if (null != user) {
              let arr = items2.push(user);
            }
            let tmp12 = user;
            let tmp13 = trueMember;
            if (null != trueMember) {
              arr = items1.push(trueMember);
              let tmp15 = user;
              let tmp16 = trueMember;
            }
          }
          iter3 = tmp5();
          iter2 = iter3;
        } while (!iter3.done);
      }
      const items3 = [items1, items2];
      return items3;
    }
  };
  items[1] = obj;
  return callback(KvMessage, null, items);
})();
const result = require("_defineProperties").fileFinishedImporting("modules/app_database/modules/messages/KvMessage.tsx");

export const KvMessage = tmp2;
