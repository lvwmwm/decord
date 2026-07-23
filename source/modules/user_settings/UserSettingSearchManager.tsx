// Module ID: 14580
// Function ID: 111150
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 5045, 14581, 2]

// Module 14580 (_createForOfIteratorHelperLoose)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

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
let tmp2 = (() => {
  class SettingSearchManager {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, self);
      this.terms = arg0;
      map = new Map();
      this.cache = map;
      map1 = new Map();
      this.cacheScored = map1;
      this.preprocessed = [];
      item = arg0.forEach((arg0) => {
        let arr;
        let tmp;
        [tmp, arr] = arg0;
        let set;
        const items = [];
        const items1 = [];
        set = new Set();
        let item = arr.forEach((toLocaleLowerCase) => {
          items.push(toLocaleLowerCase.toLocaleLowerCase());
          if (toLocaleLowerCase.includes(" ")) {
            const parts = toLocaleLowerCase.split(/\s+/);
            const item = parts.forEach((toLocaleLowerCase) => {
              const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
              if (!outer1_2.has(toLocaleLowerCaseResult)) {
                outer1_1.push(toLocaleLowerCaseResult);
                outer1_2.add(toLocaleLowerCaseResult);
              }
            });
          }
        });
        const preprocessed = items.preprocessed;
        const items2 = [tmp, { normalizedSearchTerms: items, normalizedTokens: items1 }];
      });
      return;
    }
  }
  let obj = {
    key: "search",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      return new Promise((arg0) => {
        arg0(self.getMatchingSettings(closure_1));
      });
    }
  };
  let items = [obj, , ];
  obj = {
    key: "getMatchingSettings",
    value(arg0) {
      const self = this;
      let closure_0 = arg0;
      const cache = this.cache;
      const value = cache.get(arg0);
      if (null != value) {
        return value;
      } else {
        const items = [];
        const terms = self.terms;
        const item = terms.forEach((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          const tmp3 = outer2_5(tmp2);
          let iter = tmp3();
          if (!iter.done) {
            const formatted = closure_0.toLowerCase();
            while (!tmp6(formatted, str.toLowerCase())) {
              let iter2 = tmp3();
              iter = iter2;
            }
            items.push(tmp);
            str = iter.value;
            tmp6 = outer2_1(outer2_2[2]);
          }
        });
        const cache2 = self.cache;
        const result = cache2.set(arg0, items);
        return items;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getScoredSearchResults",
    value(str) {
      const self = this;
      const trimmed = str.trim();
      const toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
      const SettingSearchManager = toLocaleLowerCaseResult;
      if (0 === toLocaleLowerCaseResult.length) {
        return [];
      } else {
        const cacheScored = self.cacheScored;
        const value = cacheScored.get(toLocaleLowerCaseResult);
        if (null != value) {
          return value;
        } else {
          const items = [];
          const preprocessed = self.preprocessed;
          let item = preprocessed.forEach((arg0) => {
            let tmp;
            [tmp, ] = arg0;
            let c0 = 0;
            if (arr.some((arg0) => arg0 === c0)) {
              c0 = 1;
            } else if (obj.some((str) => str.startsWith(c0))) {
              c0 = 0.95;
            } else {
              const item = arr.forEach((arg0) => {
                const result = SettingSearchManager(outer3_2[3]).calculateJaroWinklerSimilarity(c0, arg0);
                let num = 0;
                if (result >= 0.8) {
                  num = result;
                }
                closure_0 = Math.max(closure_0, num);
              });
            }
            if (c0 > 0) {
              obj = { setting: tmp, score: c0 };
              arr = items.push(obj);
            }
          });
          const cacheScored2 = self.cacheScored;
          let result = cacheScored2.set(toLocaleLowerCaseResult, items);
          return items;
        }
      }
    }
  };
  items[2] = obj;
  return callback(SettingSearchManager, items);
})();
let result = require("fuzzysearch").fileFinishedImporting("modules/user_settings/UserSettingSearchManager.tsx");

export default tmp2;
