// Module ID: 11837
// Function ID: 91744
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 27, 8208, 33, 5232, 4126, 689, 44, 1876]
// Exports: useFetchCollectiblesProducts

// Module 11837 (_createForOfIteratorHelperLoose)
import module_31 from "module_31";
import { useEffect } from "get ActivityIndicator";
import SAMPLE_PROFILE_ASPECT_RATIO from "SAMPLE_PROFILE_ASPECT_RATIO";
import module_33 from "module_33";
import { SKUProductLines } from "preload";
import CollectiblesItemType from "CollectiblesItemType";

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
const result = CollectiblesItemType.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProducts.tsx");

export const useFetchCollectiblesProducts = function useFetchCollectiblesProducts(first) {
  const arg1 = first;
  const dependencyMap = arg1;
  const items = [SAMPLE_PROFILE_ASPECT_RATIO];
  const stateFromStoresArray = arg1(dependencyMap[5]).useStateFromStoresArray(items, () => arg0.map((arg0) => SAMPLE_PROFILE_ASPECT_RATIO.get(arg0)));
  let module_31 = stateFromStoresArray;
  const obj = arg1(dependencyMap[5]);
  const items1 = [module_33];
  const stateFromStoresArray1 = arg1(dependencyMap[5]).useStateFromStoresArray(items1, () => arg0.map((arg0) => product.getProduct(arg0)));
  const useEffect = stateFromStoresArray1;
  const obj2 = arg1(dependencyMap[5]);
  const items2 = [module_33];
  const stateFromStoresArray2 = arg1(dependencyMap[5]).useStateFromStoresArray(items2, () => arg0.map((arg0) => productFetch.getProductFetch(arg0)));
  SAMPLE_PROFILE_ASPECT_RATIO = stateFromStoresArray2;
  const obj4 = arg1(dependencyMap[5]);
  const items3 = [module_33];
  const stateFromStoresArray3 = arg1(dependencyMap[5]).useStateFromStoresArray(items3, () => arg0.map((arg0) => productFetchBackedOff.isProductFetchBackedOff(arg0)));
  module_33 = stateFromStoresArray3;
  const items4 = [first, stateFromStoresArray, stateFromStoresArray2, stateFromStoresArray1, arg1, stateFromStoresArray3];
  useEffect(() => {
    let iter2;
    const tmp = callback(arg0.entries());
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = module_31;
        let tmp3 = module_31(iter.value, 2);
        let first = tmp3[0];
        let tmp5 = module_31;
        let tmp6 = module_31[first];
        let tmp7 = closure_3;
        let tmp8 = closure_3[first];
        let tmp9 = SAMPLE_PROFILE_ASPECT_RATIO;
        let tmp10 = SAMPLE_PROFILE_ASPECT_RATIO[first];
        let tmp11 = closure_1;
        let tmp12 = true === closure_1;
        if (tmp12) {
          let type;
          if (null != tmp8) {
            type = tmp8.type;
          }
          let tmp14 = closure_0;
          let tmp15 = closure_1;
          tmp12 = type === closure_0(closure_1[6]).CollectiblesItemType.BUNDLE;
        }
        if (tmp12) {
          tmp12 = 0 === tmp8.items.length;
        }
        let tmp16 = null != tmp8 && !tmp12;
        if (!tmp16) {
          let tmp17 = null != tmp6;
          if (tmp17) {
            let tmp18 = closure_6;
            tmp17 = tmp6.productLine !== closure_6.COLLECTIBLES;
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
          let tmp20 = module_33;
          tmp16 = module_33[first];
        }
        if (!tmp16) {
          let tmp21 = closure_0;
          let tmp22 = closure_1;
          let obj = closure_0(closure_1[7]);
          obj = {};
          let tmp23 = closure_1;
          obj.includeBundles = closure_1;
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
