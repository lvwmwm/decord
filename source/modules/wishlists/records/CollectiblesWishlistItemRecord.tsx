// Module ID: 8721
// Function ID: 68938
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 6779, 6778, 1874, 6780, 6781, 4169, 8720, 653, 1876, 2]
// Exports: isCollectiblesWishlistItemRecord

// Module 8721 (_createForOfIteratorHelperLoose)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import { transformSKUToCollectiblesItem as closure_8 } from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { SKUProductLines } from "ME";
import tmp3 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";

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
  if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
    return closure_7.fromServer(type);
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT === type) {
    return closure_10.fromServer(type);
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE === type) {
    return closure_9.fromServer(type);
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME === type) {
    return closure_11.fromServer(type);
  } else {
    return null;
  }
}
let closure_14 = tmp3;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/wishlists/records/CollectiblesWishlistItemRecord.tsx");

export default tmp3;
export const isCollectiblesWishlistItemRecord = function isCollectiblesWishlistItemRecord(arg0) {
  return arg0 instanceof closure_14;
};
