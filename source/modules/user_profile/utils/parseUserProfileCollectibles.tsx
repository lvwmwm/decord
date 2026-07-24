// Module ID: 6877
// Function ID: 54394
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1876, 2]
// Exports: default

// Module 6877 (_createForOfIteratorHelperLoose)
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
const result = require("set").fileFinishedImporting("modules/user_profile/utils/parseUserProfileCollectibles.tsx");

export default function parseUserProfileCollectibles(collectibles) {
  let iter;
  collectibles = undefined;
  if (null != collectibles) {
    collectibles = collectibles.collectibles;
  }
  if (null == collectibles) {
    let obj = { collectibles: undefined, profileEffect: undefined, profileFrame: undefined };
    return obj;
  } else {
    const items = [];
    const tmp22 = _createForOfIteratorHelperLoose(collectibles.collectibles);
    const iter3 = tmp22();
    let iter2 = iter3;
    let tmp19;
    let tmp20;
    if (!iter3.done) {
      do {
        let value = iter2.value;
        obj = {};
        ({ sku_id: obj.skuId, type: obj.type } = value);
        let date;
        if (null != value.expires_at) {
          let _Date = Date;
          let tmp3 = new.target;
          let tmp4 = new.target;
          date = new Date(value.expires_at);
        }
        obj.expiresAt = date;
        let arr = items.push(obj);
        let tmp6 = require;
        let tmp7 = dependencyMap;
        if (value.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT) {
          obj = { skuId: value.sku_id };
          let rounded;
          if (null != value.expires_at) {
            let _Math = Math;
            let _Date3 = Date;
            let tmp14 = new.target;
            let tmp15 = new.target;
            let date1 = new Date(value.expires_at);
            let tmp16 = date1;
            rounded = Math.floor(date1.getTime() / 1000);
          }
          obj.expiresAt = rounded;
          let tmp11 = obj;
          let tmp12 = tmp18;
        } else {
          let tmp24 = require;
          let tmp25 = dependencyMap;
          tmp11 = tmp17;
          tmp12 = tmp18;
          if (value.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME) {
            let obj1 = { skuId: value.sku_id };
            let tmp26 = require;
            let tmp27 = dependencyMap;
            obj1.type = require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
            let date2;
            if (null != value.expires_at) {
              let _Date2 = Date;
              let tmp8 = new.target;
              let tmp9 = new.target;
              date2 = new Date(value.expires_at);
            }
            obj1.expiresAt = date2;
            tmp11 = tmp17;
            tmp12 = obj1;
          }
        }
        iter = tmp22();
        tmp17 = tmp11;
        tmp18 = tmp12;
        iter2 = iter;
        tmp19 = tmp11;
        tmp20 = tmp12;
      } while (!iter.done);
    }
    const obj2 = { collectibles: items, profileEffect: tmp19, profileFrame: tmp20 };
    return obj2;
  }
};
