// Module ID: 9771
// Function ID: 75970
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useHandleUseNow

// Module 9771 (_createForOfIteratorHelperLoose)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/hooks/useHandleUseNow.tsx");

export const useHandleUseNow = function useHandleUseNow(product) {
  product = product.product;
  const arg1 = product;
  const onSuccess = product.onSuccess;
  const dependencyMap = onSuccess;
  const onError = product.onError;
  const callback = onError;
  let obj = React;
  const tmp2 = callback2(React.useState(false), 2);
  const callback2 = tmp2[1];
  const shopProductItems = arg1(dependencyMap[5]).useShopProductItems(product);
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  const React = firstAvatarDecoration;
  const firstProfileEffect = shopProductItems.firstProfileEffect;
  const _createForOfIteratorHelperLoose = firstProfileEffect;
  const firstNameplate = shopProductItems.firstNameplate;
  const _arrayLikeToArray = firstNameplate;
  const firstProfileFrame = shopProductItems.firstProfileFrame;
  const type = product.type;
  if (arg1(dependencyMap[3]).CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl5 = arg1(dependencyMap[4]).intl;
    let stringResult = intl5.string(arg1(dependencyMap[4]).t.zOA4ax);
  } else if (arg1(dependencyMap[3]).CollectiblesItemType.NAMEPLATE === type) {
    const intl4 = arg1(dependencyMap[4]).intl;
    stringResult = intl4.string(arg1(dependencyMap[4]).t.gOzMvx);
  } else if (arg1(dependencyMap[3]).CollectiblesItemType.PROFILE_FRAME === type) {
    const intl3 = arg1(dependencyMap[4]).intl;
    stringResult = intl3.string(arg1(dependencyMap[4]).t.lOF4zR);
  } else if (arg1(dependencyMap[3]).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl2 = arg1(dependencyMap[4]).intl;
    stringResult = intl2.string(arg1(dependencyMap[4]).t.SWm2ai);
  } else {
    const BUNDLE = arg1(dependencyMap[3]).CollectiblesItemType.BUNDLE;
    const intl = arg1(dependencyMap[4]).intl;
    stringResult = intl.string(arg1(dependencyMap[4]).t.tf1ZZ4);
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
  obj = { handleUseNow: obj.useCallback(callback(tmp), items1), isApplying: tmp2[0], canUseNow: memo };
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [memo, firstAvatarDecoration, firstProfileEffect, firstNameplate, firstProfileFrame, onSuccess, stringResult, onError];
  return obj;
};
