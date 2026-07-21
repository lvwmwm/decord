// Module ID: 7749
// Function ID: 61577
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: categorizeFriendAnniversariesByAffinity, isFriendAnniversary, pruneTimestampMap, yearsSince

// Module 7749 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/premium/gifting/shared/FriendAnniversaryUtils.tsx");

export const FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS = 7;
export const isFriendAnniversary = function isFriendAnniversary(date) {
  const items = [-1, 0, 1];
  let num = 0;
  if (0 < items.length) {
    while (true) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let obj = require(dependencyMap[0]);
      let setYearResult = obj.setYear(date, tmp2 + items[num]);
      let obj2 = require(dependencyMap[0]);
      if (!obj2.isSameDay(setYearResult, date)) {
        let _Math = Math;
        let tmp6 = require;
        let tmp7 = dependencyMap;
        let obj3 = require(dependencyMap[0]);
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
  const obj = require(dependencyMap[0]);
  return Math.round(obj.differenceInMonths(new Date(), friendsSince) / 12);
};
export const categorizeFriendAnniversariesByAffinity = function categorizeFriendAnniversariesByAffinity(closure_16, arg1, flag) {
  const highestAffinity = new Set();
  const require = highestAffinity;
  const highAffinity = new Set();
  const dependencyMap = highAffinity;
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
      while (true) {
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
        let iter2 = tmp2();
        iter = iter2;
        if (iter2.done) {
          break;
        } else {
          // continue
        }
      }
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
      // continue
    }
    continue;
  }
  return obj;
};
