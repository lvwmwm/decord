// Module ID: 11850
// Function ID: 91811
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 4175, 6774, 653, 624, 1876, 6773, 2]
// Exports: useFetchCollectiblesProducts

// Module 11850 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import { useEffect } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { SKUProductLines } from "ME";

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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProducts.tsx");

export const useFetchCollectiblesProducts = function useFetchCollectiblesProducts(first) {
  const _require = first;
  const dependencyMap = arg1;
  const items = [stateFromStoresArray2];
  const stateFromStoresArray = _require(624).useStateFromStoresArray(items, () => lib.map((arg0) => stateFromStoresArray2.get(arg0)));
  let obj = _require(624);
  const items1 = [stateFromStoresArray3];
  const stateFromStoresArray1 = _require(624).useStateFromStoresArray(items1, () => lib.map((arg0) => stateFromStoresArray3.getProduct(arg0)));
  const obj2 = _require(624);
  const items2 = [stateFromStoresArray3];
  stateFromStoresArray2 = _require(624).useStateFromStoresArray(items2, () => lib.map((arg0) => stateFromStoresArray3.getProductFetch(arg0)));
  const obj4 = _require(624);
  const items3 = [stateFromStoresArray3];
  stateFromStoresArray3 = _require(624).useStateFromStoresArray(items3, () => lib.map((arg0) => stateFromStoresArray3.isProductFetchBackedOff(arg0)));
  const items4 = [first, stateFromStoresArray, stateFromStoresArray2, stateFromStoresArray1, arg1, stateFromStoresArray3];
  stateFromStoresArray1(() => {
    let iter2;
    const tmp = outer1_7(lib.entries());
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = stateFromStoresArray;
        let tmp3 = stateFromStoresArray(iter.value, 2);
        let first = tmp3[0];
        let tmp5 = stateFromStoresArray;
        let tmp6 = stateFromStoresArray[first];
        let tmp7 = stateFromStoresArray1;
        let tmp8 = stateFromStoresArray1[first];
        let tmp9 = stateFromStoresArray2;
        let tmp10 = stateFromStoresArray2[first];
        let tmp11 = dependencyMap;
        let tmp12 = true === dependencyMap;
        if (tmp12) {
          let type;
          if (null != tmp8) {
            type = tmp8.type;
          }
          let tmp14 = lib;
          let tmp15 = dependencyMap;
          tmp12 = type === lib(1876).CollectiblesItemType.BUNDLE;
        }
        if (tmp12) {
          tmp12 = 0 === tmp8.items.length;
        }
        let tmp16 = null != tmp8 && !tmp12;
        if (!tmp16) {
          let tmp17 = null != tmp6;
          if (tmp17) {
            let tmp18 = outer1_6;
            tmp17 = tmp6.productLine !== outer1_6.COLLECTIBLES;
          }
          tmp16 = tmp17;
        }
        if (!tmp16) {
          let state;
          if (null != tmp10) {
            state = tmp10.state;
          }
          tmp16 = "fetching" === state;
        }
        if (!tmp16) {
          let tmp20 = stateFromStoresArray3;
          tmp16 = stateFromStoresArray3[first];
        }
        if (!tmp16) {
          let tmp21 = lib;
          let tmp22 = dependencyMap;
          let obj = lib(6773);
          obj = {};
          let tmp23 = dependencyMap;
          obj.includeBundles = dependencyMap;
          let collectiblesProduct = obj.fetchCollectiblesProduct(tmp3[1], obj);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
  }, items4);
  return stateFromStoresArray1.some((arg0, arg1) => {
    let state;
    if (null != stateFromStoresArray2[arg1]) {
      state = tmp.state;
    }
    let tmp3 = "fetching" === state;
    if (!tmp3) {
      let tmp5 = null == arg0;
      if (tmp5) {
        let state1;
        if (null != stateFromStoresArray2[arg1]) {
          state1 = tmp7.state;
        }
        tmp5 = "error" !== state1;
      }
      tmp3 = tmp5;
    }
    return tmp3;
  });
};
