// Module ID: 15486
// Function ID: 119016
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4217, 3767, 653, 2]
// Exports: default

// Module 15486 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import { StatusTypes } from "ME";

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
const result = require("ME").fileFinishedImporting("modules/friends/getFriendStatusCounts.tsx");

export default function getFriendStatusCounts() {
  let iter3;
  const tmp = _createForOfIteratorHelperLoose(friendIDs.getFriendIDs());
  const iter = tmp();
  let num = 0;
  let iter2 = iter;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  if (!iter.done) {
    do {
      let tmp2 = status;
      status = status.getStatus(iter2.value);
      let tmp4 = StatusTypes;
      if (StatusTypes.ONLINE === status) {
        let sum = num + 1;
        let sum1 = num2;
        let sum2 = num3;
      } else {
        let tmp5 = StatusTypes;
        if (StatusTypes.IDLE === status) {
          sum1 = num2 + 1;
          sum = num;
          sum2 = num3;
        } else {
          let tmp6 = StatusTypes;
          sum = num;
          sum1 = num2;
          sum2 = num3;
          if (StatusTypes.DND === status) {
            sum2 = num3 + 1;
            sum = num;
            sum1 = num2;
          }
        }
      }
      iter3 = tmp();
      num = sum;
      num2 = sum1;
      num3 = sum2;
      iter2 = iter3;
      num4 = sum;
      num5 = sum1;
      num6 = sum2;
    } while (!iter3.done);
  }
  const obj = { num_friends_online: num4, num_friends_idle: num5, num_friends_dnd: num6 };
  return obj;
};
