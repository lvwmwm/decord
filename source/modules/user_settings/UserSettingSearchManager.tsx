// Module ID: 14455
// Function ID: 108922
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 14455 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class SettingSearchManager {
    constructor(arg0) {
      SettingSearchManager = this;
      tmp = closure_3(this, SettingSearchManager);
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
        const self = items;
        const items1 = [];
        set = new Set();
        const item = arr.forEach((toLocaleLowerCase) => {
          items.push(toLocaleLowerCase.toLocaleLowerCase());
          if (toLocaleLowerCase.includes(" ")) {
            const parts = toLocaleLowerCase.split(/\s+/);
            const item = parts.forEach((toLocaleLowerCase) => {
              const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
              if (!set.has(toLocaleLowerCaseResult)) {
                const arr = arr.push(toLocaleLowerCaseResult);
                set.add(toLocaleLowerCaseResult);
              }
            });
          }
        });
        const preprocessed = self.preprocessed;
        const items2 = [tmp, { normalizedSearchTerms: items, normalizedTokens: items1 }];
      });
      return;
    }
  }
  const arg1 = SettingSearchManager;
  let obj = {
    key: "search",
    value(arg0) {
      const SettingSearchManager = this;
      return new Promise((arg0) => {
        arg0(self.getMatchingSettings(arg0));
      });
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getMatchingSettings",
    value(arg0) {
      const self = this;
      const SettingSearchManager = arg0;
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
          const tmp3 = callback(tmp2);
          let iter = tmp3();
          if (!iter.done) {
            const formatted = arg0.toLowerCase();
            while (!tmp6(formatted, str.toLowerCase())) {
              let iter2 = tmp3();
              iter = iter2;
            }
            items.push(tmp);
            const str = iter.value;
            const tmp6 = items(closure_2[2]);
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
          const item = preprocessed.forEach((arg0) => {
            let tmp;
            [tmp, ] = arg0;
            let closure_0 = 0;
            if (arr.some((arg0) => arg0 === closure_0)) {
              closure_0 = 1;
            } else if (obj.some((str) => str.startsWith(closure_0))) {
              closure_0 = 0.95;
            } else {
              const item = arr.forEach((arg0) => {
                const result = v095(closure_2[3]).calculateJaroWinklerSimilarity(v095, arg0);
                let num = 0;
                if (result >= 0.8) {
                  num = result;
                }
                const v095 = Math.max(v095, num);
              });
            }
            if (closure_0 > 0) {
              const obj = { setting: tmp, score: closure_0 };
              const arr = items.push(obj);
            }
          });
          const cacheScored2 = self.cacheScored;
          const result = cacheScored2.set(toLocaleLowerCaseResult, items);
          return items;
        }
      }
    }
  };
  items[2] = obj;
  return callback(SettingSearchManager, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_settings/UserSettingSearchManager.tsx");

export default tmp2;
