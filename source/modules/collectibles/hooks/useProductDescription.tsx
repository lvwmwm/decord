// Module ID: 8802
// Function ID: 69499
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 1212, 1876, 2]
// Exports: useProductDescription

// Module 8802 (_createForOfIteratorHelperLoose)
import { useMemo } from "result";

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
function getBundleDescription(bundledProducts) {
  let iter3;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    let obj = {};
    bundledProducts = bundledProducts.bundledProducts;
    let length;
    if (null != bundledProducts) {
      length = bundledProducts.length;
    }
    obj.num = length;
    return intl5.formatToPlainString(require(1212) /* getSystemLocale */.t["/0Yndu"], obj);
  } else {
    const items = [];
    let bundledProducts1 = bundledProducts.bundledProducts;
    if (null == bundledProducts1) {
      bundledProducts1 = [];
    }
    const tmpResult = _createForOfIteratorHelperLoose(bundledProducts1);
    const iter = tmpResult();
    let iter2 = iter;
    let flag2 = false;
    let flag3 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let type = value.type;
        let tmp4 = require;
        let tmp5 = dependencyMap;
        if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
          let tmp9 = require;
          let tmp10 = dependencyMap;
          let intl2 = require(1212) /* getSystemLocale */.intl;
          obj = { itemName: value.name };
          let arr = items.push(intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.Ntv9Jt, obj));
          let flag4 = flag2;
        } else {
          let tmp22 = require;
          let tmp23 = dependencyMap;
          if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT === type) {
            let tmp6 = require;
            let tmp7 = dependencyMap;
            let intl = require(1212) /* getSystemLocale */.intl;
            obj = { itemName: value.name };
            arr = items.push(intl.formatToPlainString(require(1212) /* getSystemLocale */.t["3Y8q7a"], obj));
            flag4 = flag2;
          } else {
            let tmp24 = require;
            let tmp25 = dependencyMap;
            flag4 = flag2;
            if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE === type) {
              let tmp26 = require;
              let tmp27 = dependencyMap;
              let intl6 = require(1212) /* getSystemLocale */.intl;
              let obj1 = { itemName: value.name };
              let arr1 = items.push(intl6.formatToPlainString(require(1212) /* getSystemLocale */.t["2keXky"], obj1));
              flag4 = true;
            }
          }
        }
        iter3 = tmpResult();
        flag2 = flag4;
        iter2 = iter3;
        flag3 = flag4;
      } while (!iter3.done);
    }
    const join = items.join;
    if (flag3) {
      const replaced = join(", ").replace(/, ([^,]*)$/, " & $1");
      const intl4 = require(1212) /* getSystemLocale */.intl;
      const obj2 = { joinedItems: replaced };
      return intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.Ofrqj6, obj2);
    } else {
      const joined = join(" & ");
      const intl3 = require(1212) /* getSystemLocale */.intl;
      const obj3 = { joinedItems: joined };
      return intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.Ofrqj6, obj3);
    }
    const tmp = _createForOfIteratorHelperLoose;
  }
}
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useProductDescription.tsx");

export const useProductDescription = function useProductDescription(product) {
  let flag = arg1;
  let closure_0 = product;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [product, flag];
  return useMemo(() => {
    if (null != product) {
      if (null != product.summary) {
        if ("" !== product.summary) {
          if (product.type === product(flag[2]).CollectiblesItemType.BUNDLE) {
            const summary = product.summary;
            if (summary.includes("{joinedItems}")) {
              return product.summary.replace("{joinedItems}", outer1_5(product, flag));
            }
          }
          return product.summary;
        }
      }
    }
    let type;
    if (null != product) {
      type = product.type;
    }
    if (product(flag[2]).CollectiblesItemType.AVATAR_DECORATION === type) {
      const intl4 = product(flag[1]).intl;
      return intl4.string(product(flag[1]).t["3lv7q2"]);
    } else if (product(flag[2]).CollectiblesItemType.PROFILE_EFFECT === type) {
      const intl3 = product(flag[1]).intl;
      return intl3.string(product(flag[1]).t.VhJL72);
    } else if (product(flag[2]).CollectiblesItemType.NAMEPLATE === type) {
      const intl2 = product(flag[1]).intl;
      return intl2.string(product(flag[1]).t.ik37EZ);
    } else if (product(flag[2]).CollectiblesItemType.PROFILE_FRAME === type) {
      const intl = product(flag[1]).intl;
      return intl.string(product(flag[1]).t.fWzWPp);
    } else if (product(flag[2]).CollectiblesItemType.BUNDLE === type) {
      return outer1_5(product, flag);
    } else {
      return "";
    }
  }, items);
};
