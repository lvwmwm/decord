// Module ID: 8668
// Function ID: 68643
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: isCollectiblesWishlistItemRecord

// Module 8668 (_createForOfIteratorHelperLoose)
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function createCollectiblesItemFromServerResponse(type) {
  type = type.type;
  if (arg1(dependencyMap[13]).CollectiblesItemType.AVATAR_DECORATION === type) {
    return closure_7.fromServer(type);
  } else if (arg1(dependencyMap[13]).CollectiblesItemType.PROFILE_EFFECT === type) {
    return closure_10.fromServer(type);
  } else if (arg1(dependencyMap[13]).CollectiblesItemType.NAMEPLATE === type) {
    return closure_9.fromServer(type);
  } else if (arg1(dependencyMap[13]).CollectiblesItemType.PROFILE_FRAME === type) {
    return closure_11.fromServer(type);
  } else {
    return null;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = arg1(dependencyMap[6]).transformSKUToCollectiblesItem;
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
const SKUProductLines = arg1(dependencyMap[12]).SKUProductLines;
const tmp3 = (importDefaultResult) => {
  class CollectiblesWishlistItemRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, CollectiblesWishlistItemRecord);
      items = [];
      items[0] = importDefaultResult;
      obj = closure_5(CollectiblesWishlistItemRecord);
      tmp2 = closure_4;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.skuProductLine = closure_13.COLLECTIBLES;
      if (null != importDefaultResult.bundle_items) {
        items1 = [];
        tmp19 = closure_15;
        tmp20 = closure_15(importDefaultResult.bundle_items);
        iter = tmp20();
        if (!iter.done) {
          do {
            tmp21 = closure_18;
            tmp22 = closure_18(iter.value);
            if (null != tmp22) {
              arr = items1.push(tmp22);
            }
            iter2 = tmp20();
            iter = iter2;
          } while (!iter2.done);
        }
        num = 0;
        if (0 === items1.length) {
          tmp24 = globalThis;
          _Error3 = Error;
          prototype3 = Error.prototype;
          tmp25 = new.target;
          str3 = "Bundle has no valid items";
          tmp26 = new.target;
          error = new Error("Bundle has no valid items");
          tmp28 = error;
          throw error;
        } else {
          tmp2Result.bundleItems = items1;
        }
      } else if (null != importDefaultResult.collectibles_item) {
        tmp12 = closure_18;
        tmp13 = closure_18(importDefaultResult.collectibles_item);
        if (null == tmp13) {
          tmp14 = globalThis;
          _Error2 = Error;
          prototype2 = Error.prototype;
          tmp15 = new.target;
          str2 = "Collectibles item not found";
          tmp16 = new.target;
          error1 = new Error("Collectibles item not found");
          tmp18 = error1;
          throw error1;
        } else {
          tmp2Result.collectiblesItem = tmp13;
        }
      } else if (!importDefaultResult.skipValidation) {
        tmp7 = globalThis;
        _Error = Error;
        prototype = Error.prototype;
        tmp8 = new.target;
        str = "Collectibles wishlist item missing both collectibles_item and bundle_items";
        tmp9 = new.target;
        error2 = new Error("Collectibles wishlist item missing both collectibles_item and bundle_items");
        tmp11 = error2;
        throw error2;
      }
      return tmp2Result;
    }
  }
  const arg1 = CollectiblesWishlistItemRecord;
  callback2(CollectiblesWishlistItemRecord, importDefaultResult);
  let obj = {
    key: "fromServer",
    value(sku) {
      let tmp = CollectiblesWishlistItemRecord;
      const obj = {};
      const merged = Object.assign(sku);
      let fromServer;
      if (null != sku.sku) {
        fromServer = closure_12.createFromServer(sku.sku);
      }
      obj["sku"] = fromServer;
      tmp = new tmp(obj);
      return tmp;
    }
  };
  const items = [obj, ];
  obj = {
    key: "fromSKU",
    value(id) {
      const tmp = callback3(id);
      if (null == tmp) {
        return null;
      } else {
        const obj = { sku_id: id.id, sku_product_line: constants.COLLECTIBLES, sku_name: id.name, sku: id, skipValidation: true };
        const prototype = CollectiblesWishlistItemRecord.prototype;
        const tmp9 = new CollectiblesWishlistItemRecord(obj);
        let item;
        if ("single" === tmp.type) {
          item = tmp.item;
        }
        tmp9.collectiblesItem = item;
        let items;
        if ("bundle" === tmp.type) {
          items = tmp.items;
        }
        tmp9.bundleItems = items;
        return tmp9;
      }
    }
  };
  items[1] = obj;
  return callback(CollectiblesWishlistItemRecord, null, items);
}(importDefault(dependencyMap[11]));
const importDefaultResult = importDefault(dependencyMap[11]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/wishlists/records/CollectiblesWishlistItemRecord.tsx");

export default tmp3;
export const isCollectiblesWishlistItemRecord = function isCollectiblesWishlistItemRecord(arg0) {
  return arg0 instanceof tmp3;
};
