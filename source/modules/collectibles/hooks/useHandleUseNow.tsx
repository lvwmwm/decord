// Module ID: 9811
// Function ID: 76229
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 1876, 1212, 8251, 9812, 7936, 9266, 2]
// Exports: useHandleUseNow

// Module 9811 (_createForOfIteratorHelperLoose)
import ItemsSortingHat from "ItemsSortingHat";
import _slicedToArray from "_slicedToArray";
import result from "result";

let require = arg1;
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
const result = require("result").fileFinishedImporting("modules/collectibles/hooks/useHandleUseNow.tsx");

export const useHandleUseNow = function useHandleUseNow(product) {
  product = product.product;
  const require = product;
  const onSuccess = product.onSuccess;
  const onError = product.onError;
  let obj = firstAvatarDecoration;
  const tmp2 = callback(firstAvatarDecoration.useState(false), 2);
  callback = tmp2[1];
  const shopProductItems = require(onSuccess[5]).useShopProductItems(product);
  firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  const firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstNameplate = shopProductItems.firstNameplate;
  const firstProfileFrame = shopProductItems.firstProfileFrame;
  const type = product.type;
  if (require(onSuccess[3]).CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl5 = require(onSuccess[4]).intl;
    let stringResult = intl5.string(require(onSuccess[4]).t.zOA4ax);
  } else if (require(onSuccess[3]).CollectiblesItemType.NAMEPLATE === type) {
    const intl4 = require(onSuccess[4]).intl;
    stringResult = intl4.string(require(onSuccess[4]).t.gOzMvx);
  } else if (require(onSuccess[3]).CollectiblesItemType.PROFILE_FRAME === type) {
    const intl3 = require(onSuccess[4]).intl;
    stringResult = intl3.string(require(onSuccess[4]).t.lOF4zR);
  } else if (require(onSuccess[3]).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl2 = require(onSuccess[4]).intl;
    stringResult = intl2.string(require(onSuccess[4]).t.SWm2ai);
  } else {
    const BUNDLE = require(onSuccess[3]).CollectiblesItemType.BUNDLE;
    const intl = require(onSuccess[4]).intl;
    stringResult = intl.string(require(onSuccess[4]).t.tf1ZZ4);
  }
  const items = [product];
  const memo = obj.useMemo(() => {
    let flag = true;
    if (product.type === product(onSuccess[3]).CollectiblesItemType.BUNDLE) {
      const _Set = Set;
      const set = new Set();
      const tmp7 = firstProfileEffect(product.items);
      let iter = tmp7();
      flag = true;
      if (!iter.done) {
        const value = iter.value;
        flag = false;
        while (!set.has(value.type)) {
          let addResult = set.add(value.type);
          let iter2 = tmp7();
          iter = iter2;
          flag = true;
          if (iter2.done) {
            break;
          }
        }
      }
    }
    return flag;
  }, items);
  obj = { handleUseNow: obj.useCallback(onError(tmp), items1), isApplying: tmp2[0], canUseNow: memo };
  // CreateGeneratorClosureLongIndex (0x67)
  items1 = [memo, firstAvatarDecoration, firstProfileEffect, firstNameplate, firstProfileFrame, onSuccess, stringResult, onError];
  return obj;
};
