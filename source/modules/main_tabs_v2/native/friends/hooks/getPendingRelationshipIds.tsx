// Module ID: 15514
// Function ID: 119389
// Name: _createForOfIteratorHelperLoose
// Dependencies: [3767, 653, 2]
// Exports: getPendingRelationshipIds

// Module 15514 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";

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
function filterFromPending(value) {
  let isSpamResult = _isNativeReflectConstruct.isSpam(value);
  if (!isSpamResult) {
    isSpamResult = _isNativeReflectConstruct.isIgnored(value);
  }
  return isSpamResult;
}
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx");

export const getPendingRelationshipIds = function getPendingRelationshipIds(mutableRelationships, closure_2) {
  let iter2;
  const pendingIncomingIds = [];
  const pendingOutgoingIds = [];
  const spamIds = [];
  const ignoredUserIds = [];
  const tmp = _createForOfIteratorHelperLoose(mutableRelationships.keys());
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      value = mutableRelationships.get(value);
      let tmp3 = RelationshipTypes;
      let tmp4 = value !== RelationshipTypes.PENDING_INCOMING;
      if (!tmp4) {
        let tmp5 = filterFromPending;
        tmp4 = filterFromPending(value);
      }
      if (!tmp4) {
        let arr = pendingIncomingIds.push(value);
      }
      let tmp7 = RelationshipTypes;
      if (value === RelationshipTypes.PENDING_OUTGOING) {
        arr = pendingOutgoingIds.push(value);
      }
      let tmp9 = RelationshipTypes;
      let isSpamResult = value === RelationshipTypes.PENDING_INCOMING;
      if (isSpamResult) {
        let tmp11 = _isNativeReflectConstruct;
        isSpamResult = _isNativeReflectConstruct.isSpam(value);
      }
      if (isSpamResult) {
        let arr1 = spamIds.push(value);
      }
      let tmp13 = RelationshipTypes;
      let isIgnoredResult = value === RelationshipTypes.PENDING_INCOMING;
      if (isIgnoredResult) {
        let tmp15 = _isNativeReflectConstruct;
        isIgnoredResult = _isNativeReflectConstruct.isIgnored(value);
      }
      if (isIgnoredResult) {
        let arr2 = ignoredUserIds.push(value);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  const reversed = pendingIncomingIds.reverse();
  const reversed1 = pendingOutgoingIds.reverse();
  const reversed2 = spamIds.reverse();
  return { pendingIncomingIds, pendingOutgoingIds, spamIds, ignoredUserIds };
};
