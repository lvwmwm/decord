// Module ID: 6773
// Function ID: 53335
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: createCollectiblesItemsFromServerResponse

// Module 6773 (_createForOfIteratorHelperLoose)
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
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ SKUProductLines: closure_7, SKUTypes: closure_8 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/collectibles/records/CollectiblesItemRecord.tsx");
function transformSKUToCollectiblesItem(productLine) {
  let effects;
  let iter2;
  if (productLine.productLine === constants.COLLECTIBLES) {
    if (productLine.type === constants2.BUNDLE) {
      const items = [];
      let bundledSkus = productLine.bundledSkus;
      if (null == bundledSkus) {
        bundledSkus = [];
      }
      const tmp30Result = _createForOfIteratorHelperLoose(bundledSkus);
      let iter = tmp30Result();
      if (!iter.done) {
        do {
          let tmp33 = closure_11;
          let tmp34 = closure_11(iter.value);
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
        const previewAssetPaths = productLine.previewAssetPaths;
        let tmp37;
        if (null != previewAssetPaths) {
          tmp37 = previewAssetPaths;
        }
        obj.previewAssets = tmp37;
        return obj;
      }
      const tmp30 = _createForOfIteratorHelperLoose;
    } else {
      const tenantMetadata = productLine.tenantMetadata;
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
        if (arg1(dependencyMap[6]).CollectiblesItemType.AVATAR_DECORATION === type) {
          obj = { type: "single" };
          const obj1 = { skuId: productLine.id };
          ({ type: obj8.type, asset: obj8.asset, label: obj8.label } = item);
          const prototype4 = ctor.prototype;
          const tmp28 = new ctor(obj1);
          obj.item = tmp28;
          return obj;
        } else if (arg1(dependencyMap[6]).CollectiblesItemType.NAMEPLATE === type) {
          const obj2 = { type: "single" };
          const obj3 = { skuId: productLine.id };
          ({ type: obj6.type, asset: obj6.asset, label: obj6.label, palette: obj6.palette } = item);
          const prototype3 = ctor2.prototype;
          const tmp22 = new ctor2(obj3);
          obj2.item = tmp22;
          return obj2;
        } else if (arg1(dependencyMap[6]).CollectiblesItemType.PROFILE_EFFECT === type) {
          const obj4 = { type: "single" };
          let tmp12 = closure_4;
          const obj5 = { skuId: productLine.id };
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
        } else if (arg1(dependencyMap[6]).CollectiblesItemType.PROFILE_FRAME === type) {
          obj = { type: "single" };
          const obj6 = { skuId: productLine.id };
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
      if (callback(closure_1[6]).CollectiblesItemType.AVATAR_DECORATION === type) {
        arr.push(closure_2.fromServer(type));
      } else if (callback(closure_1[6]).CollectiblesItemType.NAMEPLATE === type) {
        arr.push(closure_3.fromServer(type));
      } else if (callback(closure_1[6]).CollectiblesItemType.PROFILE_EFFECT === type) {
        arr.push(closure_4.fromServer(type));
      } else if (callback(closure_1[6]).CollectiblesItemType.PROFILE_FRAME === type) {
        arr.push(closure_5.fromServer(type));
      } else {
        arr.push(closure_6.fromServer(type));
      }
      return arr;
    }, []);
  }
  return items;
};
export { transformSKUToCollectiblesItem };
