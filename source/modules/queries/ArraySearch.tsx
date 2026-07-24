// Module ID: 11220
// Function ID: 87310
// Name: _createForOfIteratorHelperLoose
// Dependencies: [2]
// Exports: queryData

// Module 11220 (_createForOfIteratorHelperLoose)
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
    _arrayLikeToArray = 0;
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
function sortGroup(value, sortComparers) {
  let closure_0 = sortComparers;
  return value.sort((arg0, arg1) => {
    const tmp = sortComparers(sortComparers);
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
const result = require("set").fileFinishedImporting("modules/queries/ArraySearch.tsx");

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
  let arr2 = (function applyFilters(arr, filterPredicates) {
    let closure_0 = filterPredicates;
    return arr.filter((arg0) => {
      let closure_0 = arg0;
      return closure_0.every((arg0) => arg0(closure_0));
    });
  })(arr, filterPredicates);
  if (null != limit.bucketPredicates) {
    if (limit.bucketPredicates.length > 0) {
      if (num >= arr2.length) {
        let bucketPredicates = limit.bucketPredicates;
        if (null == bucketPredicates) {
          bucketPredicates = [];
        }
        let tmp = (function applyBucketingSingleIteration(arr2, bucketPredicates) {
          let iter2;
          const array = new Array(bucketPredicates.length);
          const mapped = array.fill(null).map(() => []);
          const tmp2 = outer1_0(arr2);
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
        })(arr2, bucketPredicates);
      } else {
        let bucketPredicates1 = limit.bucketPredicates;
        if (null == bucketPredicates1) {
          bucketPredicates1 = [];
        }
        tmp = (function applyBucketing(arr2, bucketPredicates1, arg2) {
          let tmp = arr2;
          const items = [];
          const tmp2 = outer1_0(bucketPredicates1);
          const iter = tmp2();
          if (!iter.done) {
            while (true) {
              let items1 = [];
              let items2 = [];
              let tmp5 = outer1_0;
              let tmp6 = outer1_0(tmp);
              let iter2 = tmp6();
              if (!iter2.done) {
                do {
                  let value = iter2.value;
                  if (tmp4(value)) {
                    let arr = items2.push(value);
                  } else {
                    arr = items1.push(value);
                  }
                  iter3 = tmp6();
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
        })(arr2, bucketPredicates1, num);
      }
    }
  }
  let items = [arr2];
  let sortComparers = limit.sortComparers;
  if (null == sortComparers) {
    sortComparers = [];
  }
  let items1 = [];
  let tmp3 = _createForOfIteratorHelperLoose(items);
  let iter = tmp3();
  if (!iter.done) {
    const push = items1.push;
    let items2 = [];
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
