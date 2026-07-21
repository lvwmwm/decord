// Module ID: 8755
// Function ID: 69231
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useProductDescription

// Module 8755 (_createForOfIteratorHelperLoose)
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
function getBundleDescription(bundledProducts) {
  let iter3;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    const intl5 = require(dependencyMap[1]).intl;
    let obj = {};
    bundledProducts = bundledProducts.bundledProducts;
    let length;
    if (null != bundledProducts) {
      length = bundledProducts.length;
    }
    obj.num = length;
    return intl5.formatToPlainString(require(dependencyMap[1]).t./0Yndu, obj);
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
        let tmp4 = closure_0;
        let tmp5 = closure_1;
        if (closure_0(closure_1[2]).CollectiblesItemType.AVATAR_DECORATION === type) {
          let tmp9 = closure_0;
          let tmp10 = closure_1;
          let intl2 = closure_0(closure_1[1]).intl;
          obj = { itemName: value.name };
          let arr = items.push(intl2.formatToPlainString(closure_0(closure_1[1]).t.Ntv9Jt, obj));
          let flag4 = flag2;
        } else {
          let tmp22 = closure_0;
          let tmp23 = closure_1;
          if (closure_0(closure_1[2]).CollectiblesItemType.PROFILE_EFFECT === type) {
            let tmp6 = closure_0;
            let tmp7 = closure_1;
            let intl = closure_0(closure_1[1]).intl;
            obj = { itemName: value.name };
            arr = items.push(intl.formatToPlainString(closure_0(closure_1[1]).t.3Y8q7a, obj));
            flag4 = flag2;
          } else {
            let tmp24 = closure_0;
            let tmp25 = closure_1;
            flag4 = flag2;
            if (closure_0(closure_1[2]).CollectiblesItemType.NAMEPLATE === type) {
              let tmp26 = closure_0;
              let tmp27 = closure_1;
              let intl6 = closure_0(closure_1[1]).intl;
              let obj1 = { itemName: value.name };
              let arr1 = items.push(intl6.formatToPlainString(closure_0(closure_1[1]).t.2keXky, obj1));
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
      const intl4 = require(dependencyMap[1]).intl;
      const obj2 = { joinedItems: replaced };
      return intl4.formatToPlainString(require(dependencyMap[1]).t.Ofrqj6, obj2);
    } else {
      const joined = join(" & ");
      const intl3 = require(dependencyMap[1]).intl;
      const obj3 = { joinedItems: joined };
      return intl3.formatToPlainString(require(dependencyMap[1]).t.Ofrqj6, obj3);
    }
    const tmp = _createForOfIteratorHelperLoose;
  }
}
const useMemo = require(dependencyMap[0]).useMemo;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/collectibles/hooks/useProductDescription.tsx");

export const useProductDescription = function useProductDescription(product) {
  let flag = arg1;
  const require = product;
  if (arg1 === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  const items = [product, flag];
  return useMemo((self) => {
    if (null != self) {
      if (null != self.summary) {
        if ("" !== self.summary) {
          if (self.type === self(flag[2]).CollectiblesItemType.BUNDLE) {
            const summary = self.summary;
            if (summary.includes("{joinedItems}")) {
              return self.summary.replace("{joinedItems}", callback(self, flag));
            }
          }
          return self.summary;
        }
      }
    }
    let type;
    if (null != self) {
      type = self.type;
    }
    if (self(flag[2]).CollectiblesItemType.AVATAR_DECORATION === type) {
      const intl4 = self(flag[1]).intl;
      return intl4.string(self(flag[1]).t.3lv7q2);
    } else if (self(flag[2]).CollectiblesItemType.PROFILE_EFFECT === type) {
      const intl3 = self(flag[1]).intl;
      return intl3.string(self(flag[1]).t.VhJL72);
    } else if (self(flag[2]).CollectiblesItemType.NAMEPLATE === type) {
      const intl2 = self(flag[1]).intl;
      return intl2.string(self(flag[1]).t.ik37EZ);
    } else if (self(flag[2]).CollectiblesItemType.PROFILE_FRAME === type) {
      const intl = self(flag[1]).intl;
      return intl.string(self(flag[1]).t.fWzWPp);
    } else if (self(flag[2]).CollectiblesItemType.BUNDLE === type) {
      return callback(self, flag);
    } else {
      return "";
    }
  }, items);
};
