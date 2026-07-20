// Module ID: 6868
// Function ID: 54319
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 6868 (_createForOfIteratorHelperLoose)
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
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_profile/utils/parseUserProfileCollectibles.tsx");

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
        let tmp6 = closure_0;
        let tmp7 = closure_1;
        if (value.type === closure_0(closure_1[0]).CollectiblesItemType.PROFILE_EFFECT) {
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
          let tmp24 = closure_0;
          let tmp25 = closure_1;
          tmp11 = tmp17;
          tmp12 = tmp18;
          if (value.type === closure_0(closure_1[0]).CollectiblesItemType.PROFILE_FRAME) {
            let obj1 = { skuId: value.sku_id };
            let tmp26 = closure_0;
            let tmp27 = closure_1;
            obj1.type = closure_0(closure_1[0]).CollectiblesItemType.PROFILE_FRAME;
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
        let tmp17 = tmp11;
        let tmp18 = tmp12;
        iter2 = iter;
        tmp19 = tmp11;
        tmp20 = tmp12;
      } while (!iter.done);
    }
    const obj2 = { collectibles: items, profileEffect: tmp19, profileFrame: tmp20 };
    return obj2;
  }
};
