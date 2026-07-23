// Module ID: 6778
// Function ID: 53378
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6779, 1874, 6780, 6781, 6782, 653, 1876, 2]
// Exports: createCollectiblesItemsFromServerResponse

// Module 6778 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_7;
let closure_8;
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
({ SKUProductLines: closure_7, SKUTypes: closure_8 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/records/CollectiblesItemRecord.tsx");
function transformSKUToCollectiblesItem(value) {
  let effects;
  let iter2;
  if (value.productLine === constants.COLLECTIBLES) {
    if (value.type === constants2.BUNDLE) {
      const items = [];
      let bundledSkus = value.bundledSkus;
      if (null == bundledSkus) {
        bundledSkus = [];
      }
      const tmp30Result = _createForOfIteratorHelperLoose(bundledSkus);
      let iter = tmp30Result();
      if (!iter.done) {
        do {
          let tmp33 = transformSKUToCollectiblesItem;
          let tmp34 = transformSKUToCollectiblesItem(iter.value);
          let type;
          if (null != tmp34) {
            type = tmp34.type;
          }
          if ("single" === type) {
            let arr = items.push(tmp34.item);
          }
          iter2 = tmp30Result();
          iter = iter2;
        } while (!iter2.done);
      }
      if (0 !== items.length) {
        let obj = { type: "bundle", items };
        const previewAssetPaths = value.previewAssetPaths;
        let tmp37;
        if (null != previewAssetPaths) {
          tmp37 = previewAssetPaths;
        }
        obj.previewAssets = tmp37;
        return obj;
      }
      const tmp30 = _createForOfIteratorHelperLoose;
    } else {
      const tenantMetadata = value.tenantMetadata;
      let collectibles;
      if (null != tenantMetadata) {
        collectibles = tenantMetadata.collectibles;
      }
      let item;
      if (null != collectibles) {
        item = collectibles.item;
      }
      if (null != item) {
        type = item.type;
        if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
          obj = { type: "single" };
          const obj1 = { skuId: value.id };
          ({ type: obj8.type, asset: obj8.asset, label: obj8.label } = item);
          const prototype4 = ctor.prototype;
          const tmp28 = new ctor(obj1);
          obj.item = tmp28;
          return obj;
        } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE === type) {
          const obj2 = { type: "single" };
          const obj3 = { skuId: value.id };
          ({ type: obj6.type, asset: obj6.asset, label: obj6.label, palette: obj6.palette } = item);
          const prototype3 = ctor2.prototype;
          const tmp22 = new ctor2(obj3);
          obj2.item = tmp22;
          return obj2;
        } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT === type) {
          const obj4 = { type: "single" };
          let tmp12 = closure_4;
          const obj5 = { skuId: value.id };
          ({ type: obj4.type, title: obj4.title, description: obj4.description, thumbnailPreviewSrc: obj4.thumbnailPreviewSrc, reducedMotionSrc: obj4.reducedMotionSrc, effects } = item);
          if (null == effects) {
            effects = [];
          }
          obj5.effects = effects;
          ({ accessibilityLabel: obj4.accessibilityLabel, animationType: obj4.animationType, staticFrameSrc: obj4.staticFrameSrc } = item);
          const prototype2 = tmp12.prototype;
          tmp12 = new tmp12(obj5);
          obj4.item = tmp12;
          return obj4;
        } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME === type) {
          obj = { type: "single" };
          const obj6 = { skuId: value.id };
          ({ type: obj2.type, label: obj2.label, layers: obj2.layers, innerWidth: obj2.innerWidth, overflowTop: obj2.overflowTop, overflowBottom: obj2.overflowBottom, overflowHorizontal: obj2.overflowHorizontal } = item);
          const prototype = ctor3.prototype;
          const tmp10 = new ctor3(obj6);
          obj.item = tmp10;
          return obj;
        }
      }
    }
  }
}

export const createCollectiblesItemsFromServerResponse = function createCollectiblesItemsFromServerResponse(arr) {
  if (null == arr) {
    let items = [];
  } else {
    items = arr.reduce((arr, type) => {
      type = type.type;
      if (outer1_0(outer1_1[6]).CollectiblesItemType.AVATAR_DECORATION === type) {
        arr.push(outer1_2.fromServer(type));
      } else if (outer1_0(outer1_1[6]).CollectiblesItemType.NAMEPLATE === type) {
        arr.push(outer1_3.fromServer(type));
      } else if (outer1_0(outer1_1[6]).CollectiblesItemType.PROFILE_EFFECT === type) {
        arr.push(outer1_4.fromServer(type));
      } else if (outer1_0(outer1_1[6]).CollectiblesItemType.PROFILE_FRAME === type) {
        arr.push(outer1_5.fromServer(type));
      } else {
        arr.push(outer1_6.fromServer(type));
      }
      return arr;
    }, []);
  }
  return items;
};
export { transformSKUToCollectiblesItem };
