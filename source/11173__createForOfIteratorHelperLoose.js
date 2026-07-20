// Module ID: 11173
// Function ID: 86943
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: queryData

// Module 11173 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let _createForOfIteratorHelperLoose = Symbol_iterator;
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
      _createForOfIteratorHelperLoose = tmp;
    }
    const _arrayLikeToArray = 0;
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
function sortGroup(value, sortComparers) {
  const _createForOfIteratorHelperLoose = sortComparers;
  return value.sort((arg0, arg1) => {
    const tmp = arg1(arg1);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      const valueResult = iter2.value(arg0, arg1);
      while (0 === valueResult) {
        let iter3 = tmp();
        iter2 = iter3;
      }
      return valueResult;
    }
    return 0;
  });
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/queries/ArraySearch.tsx");

export const queryData = function queryData(arr, limit) {
  limit = limit.limit;
  let num = Infinity;
  if (null != limit) {
    num = limit;
  }
  let filterPredicates = limit.filterPredicates;
  if (null == filterPredicates) {
    filterPredicates = [];
  }
  const arr2 = function applyFilters(arr, filterPredicates) {
    return arr.filter((arg0) => {
      const arg1 = arg0;
      return arg1.every((arg0) => arg0(arg0));
    });
  }(arr, filterPredicates);
  if (null != limit.bucketPredicates) {
    if (limit.bucketPredicates.length > 0) {
      if (num >= arr2.length) {
        let bucketPredicates = limit.bucketPredicates;
        if (null == bucketPredicates) {
          bucketPredicates = [];
        }
        let tmp = function applyBucketingSingleIteration(arr2, bucketPredicates) {
          let iter2;
          const array = new Array(bucketPredicates.length);
          const mapped = array.fill(null).map(() => []);
          const tmp2 = callback(arr2);
          let iter = tmp2();
          if (!iter.done) {
            do {
              let value = iter.value;
              let num = 0;
              if (0 < bucketPredicates.length) {
                let tmp3 = num;
                while (!bucketPredicates[num](value)) {
                  num = num + 1;
                }
                arr2 = mapped[num];
                let arr = arr2.push(value);
              }
              iter2 = tmp2();
              iter = iter2;
            } while (!iter2.done);
          }
          return mapped;
        }(arr2, bucketPredicates);
      } else {
        let bucketPredicates1 = limit.bucketPredicates;
        if (null == bucketPredicates1) {
          bucketPredicates1 = [];
        }
        tmp = function applyBucketing(arr2, bucketPredicates1, arg2) {
          let tmp = arr2;
          const items = [];
          const tmp2 = callback(bucketPredicates1);
          const iter = tmp2();
          if (!iter.done) {
            while (true) {
              let items1 = [];
              let items2 = [];
              let tmp5 = callback;
              let tmp6 = callback(tmp);
              let iter2 = tmp6();
              if (!iter2.done) {
                do {
                  let value = iter2.value;
                  if (tmp4(value)) {
                    let arr = items2.push(value);
                  } else {
                    arr = items1.push(value);
                  }
                  let iter3 = tmp6();
                  iter2 = iter3;
                  let tmp9 = value;
                } while (!iter3.done);
              }
              let arr1 = items.push(items2);
              if (items.reduce((arg0, arg1) => arg1.length + arg0, 0) >= arg2) {
                break;
              } else {
                let iter4 = tmp2();
                let tmp3 = iter4;
                tmp = items1;
                if (iter4.done) {
                  break;
                }
              }
            }
          }
          return items;
        }(arr2, bucketPredicates1, num);
      }
    }
  }
  const items = [arr2];
  let sortComparers = limit.sortComparers;
  if (null == sortComparers) {
    sortComparers = [];
  }
  const items1 = [];
  const tmp3 = _createForOfIteratorHelperLoose(items);
  let iter = tmp3();
  if (!iter.done) {
    const push = items1.push;
    const items2 = [];
    HermesBuiltin.arraySpread(sortGroup(iter.value, sortComparers), 0);
    HermesBuiltin.apply(items2, items1);
    while (items1.length < num) {
      let iter2 = tmp3();
      iter = iter2;
      if (iter2.done) {
        break;
      }
    }
  }
  return items1.slice(0, num);
};
