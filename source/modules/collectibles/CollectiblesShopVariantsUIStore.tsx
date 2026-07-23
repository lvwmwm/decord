// Module ID: 8701
// Function ID: 68910
// Name: useSelectedVariantIndex
// Dependencies: [677, 3743, 8664, 6785, 2]
// Exports: setSelectedVariantIndex, useSelectedVariantIndex

// Module 8701 (useSelectedVariantIndex)
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

let closure_2 = useStoreWithEqualityFn.createWithEqualityFn(() => {
  const obj = { selectionStates: new Map() };
  return obj;
}, require("isIterable").shallow);
const result = require("useDefaultVariantIndex").fileFinishedImporting("modules/collectibles/CollectiblesShopVariantsUIStore.tsx");

export const useSelectedVariantIndex = function useSelectedVariantIndex(product) {
  const _require = product;
  let defaultVariantIndex = _require(8664).useDefaultVariantIndex(product);
  const tmp2 = state((selectionStates) => {
    let tmp = null;
    if (null != product) {
      tmp = null;
      if (obj.getIsVariantProduct(product)) {
        selectionStates = selectionStates.selectionStates;
        const value = selectionStates.get(product.storeListingId);
        let selectedVariantIndex;
        if (null != value) {
          selectedVariantIndex = value.selectedVariantIndex;
        }
        tmp = selectedVariantIndex;
      }
      obj = product(outer1_1[3]);
    }
    return tmp;
  });
  if (null != tmp2) {
    const _Math = Math;
    defaultVariantIndex = Math.max(0, tmp2);
  }
  return defaultVariantIndex;
};
export const setSelectedVariantIndex = function setSelectedVariantIndex(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  state.setState((selectionStates) => {
    selectionStates = selectionStates.selectionStates;
    const value = selectionStates.get(closure_0.storeListingId);
    let selectedVariantIndex;
    if (null != value) {
      selectedVariantIndex = value.selectedVariantIndex;
    }
    let tmp3 = selectionStates;
    if (selectedVariantIndex !== closure_1) {
      let obj = {};
      const _Map = Map;
      const map = new Map(selectionStates.selectionStates);
      obj = { selectedVariantIndex: closure_1 };
      obj.selectionStates = map.set(closure_0.storeListingId, obj);
      tmp3 = obj;
    }
    return tmp3;
  });
};
