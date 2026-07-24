// Module ID: 7848
// Function ID: 61951
// Name: _createForOfIteratorHelperLoose
// Dependencies: [3355, 2]
// Exports: categorizeFriendAnniversariesByAffinity, isFriendAnniversary, pruneTimestampMap, yearsSince

// Module 7848 (_createForOfIteratorHelperLoose)
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
const result = require("set").fileFinishedImporting("modules/premium/gifting/shared/FriendAnniversaryUtils.tsx");

export const FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS = 7;
export const isFriendAnniversary = function isFriendAnniversary(date) {
  const items = [-1, 0, 1];
  let num = 0;
  if (0 < items.length) {
    while (true) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let obj = require(3355);
      let setYearResult = obj.setYear(date, tmp2 + items[num]);
      let obj2 = require(3355);
      if (!obj2.isSameDay(setYearResult, date)) {
        let _Math = Math;
        let tmp6 = require;
        let tmp7 = dependencyMap;
        let obj3 = require(3355);
        if (Math.abs(obj3.differenceInDays(date, setYearResult)) <= 7) {
          break;
        }
      }
      num = num + 1;
    }
    return true;
  }
  return false;
};
export const yearsSince = function yearsSince(friendsSince) {
  const obj = require(3355);
  return Math.round(obj.differenceInMonths(new Date(), friendsSince) / 12);
};
export const categorizeFriendAnniversariesByAffinity = function categorizeFriendAnniversariesByAffinity(closure_16, arg1, flag) {
  let iter2;
  const highestAffinity = new Set();
  const highAffinity = new Set();
  if (flag) {
    const _Math = Math;
    const substr = closure_16.slice(0, Math.ceil(closure_16.length / 2));
    const item = substr.forEach((arg0) => {
      highestAffinity.add(arg0);
    });
    const item1 = closure_16.forEach((arg0) => {
      highAffinity.add(arg0);
    });
  } else {
    const tmp2 = _createForOfIteratorHelperLoose(closure_16);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp4 = arg1(value);
        let tmp5 = null != tmp4 && tmp4 > 0.7;
        if (tmp5) {
          let addResult = highestAffinity.add(value);
        }
        let tmp7 = null != tmp4 && tmp4 > 0.5;
        if (tmp7) {
          let addResult1 = highAffinity.add(value);
        }
        iter2 = tmp2();
        iter = iter2;
      } while (!iter2.done);
    }
  }
  return { highestAffinity, highAffinity };
};
export const pruneTimestampMap = function pruneTimestampMap(messageGiftIntentLastShownMap, currentTime, arg2) {
  const obj = {};
  for (const key10006 in arg0) {
    let tmp = key10006;
    let tmp2 = arg0[key10006];
    if (arg1 - tmp2 > arg2) {
      continue;
    } else {
      obj[key10006] = tmp2;
      continue;
    }
    continue;
  }
  return obj;
};
