// Module ID: 10420
// Function ID: 10421
// Name: CollectiblesShopVariantsUIStore
// Dependencies: [1258, 5221, 10417, 8496, 2]
// Exports: setSelectedVariantIndex, useSelectedVariantIndex

// Module 10420 (CollectiblesShopVariantsUIStore)
import _slicedToArray from "_slicedToArray" /* 5221 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 8496 */;
import module_1258 from "module_1258" /* 1258 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, map;

const state = module_1258.createWithEqualityFn(() => {
  const obj = { selectionStates: new Map() };
  new Map();
  return obj;
}, _slicedToArray.shallow);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesShopVariantsUIStore.tsx");

export function useSelectedVariantIndex(product) {
  _require = product;
  let obj = require("useDefaultVariantIndex");
  let defaultVariantIndex = obj.useDefaultVariantIndex(product);
  let tmp2 = state((selectionStates) => {
    let tmp2 = null;
    if (null != _require) {
      tmp2 = null;
      const obj = CollectiblesProductUtils;
      if (obj.getIsVariantProduct(_require)) {
        selectionStates = selectionStates.selectionStates;
        const value = selectionStates.get(tmp.storeListingId);
        let selectedVariantIndex;
        if (value != null) {
          selectedVariantIndex = value.selectedVariantIndex;
        }
        tmp2 = selectedVariantIndex;
      }
    }
    return tmp2;
  });
  if (null != tmp2) {
    const _Math = Math;
    defaultVariantIndex = Math.max(0, tmp2);
  }
  return defaultVariantIndex;
}
export function setSelectedVariantIndex(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  state.setState(function(selectionStates) {
    let obj2;
    selectionStates = selectionStates.selectionStates;
    const value = selectionStates.get(storeListingId.storeListingId);
    let selectedVariantIndex;
    const tmp = storeListingId;
    if (value != null) {
      selectedVariantIndex = value.selectedVariantIndex;
    }
    let tmp5 = selectionStates;
    if (selectedVariantIndex !== closure_1) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj = { selectionStates: map.set(tmp.storeListingId, obj2) };
      tmp5 = obj;
      map = new Map(selectionStates.selectionStates);
      obj2 = { selectedVariantIndex: tmp4 };
    }
    return tmp5;
  });
}
