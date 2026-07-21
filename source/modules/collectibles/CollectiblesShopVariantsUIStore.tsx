// Module ID: 8693
// Function ID: 68858
// Name: useSelectedVariantIndex
// Dependencies: []
// Exports: setSelectedVariantIndex, useSelectedVariantIndex

// Module 8693 (useSelectedVariantIndex)
const _module = require(dependencyMap[0]);
let closure_2 = _module.createWithEqualityFn(() => {
  const obj = { selectionStates: new Map() };
  return obj;
}, require(dependencyMap[1]).shallow);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/collectibles/CollectiblesShopVariantsUIStore.tsx");

export const useSelectedVariantIndex = function useSelectedVariantIndex(product) {
  const require = product;
  let defaultVariantIndex = require(dependencyMap[2]).useDefaultVariantIndex(product);
  const tmp2 = state((selectionStates) => {
    let tmp = null;
    if (null != selectionStates) {
      tmp = null;
      if (obj.getIsVariantProduct(selectionStates)) {
        selectionStates = selectionStates.selectionStates;
        const value = selectionStates.get(selectionStates.storeListingId);
        let selectedVariantIndex;
        if (null != value) {
          selectedVariantIndex = value.selectedVariantIndex;
        }
        tmp = selectedVariantIndex;
      }
      const obj = selectionStates(closure_1[3]);
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
  const require = arg0;
  const dependencyMap = arg1;
  state.setState((selectionStates) => {
    selectionStates = selectionStates.selectionStates;
    const value = selectionStates.get(selectionStates.storeListingId);
    let selectedVariantIndex;
    if (null != value) {
      selectedVariantIndex = value.selectedVariantIndex;
    }
    let tmp3 = selectionStates;
    if (selectedVariantIndex !== arg1) {
      let obj = {};
      const _Map = Map;
      const map = new Map(selectionStates.selectionStates);
      obj = { selectedVariantIndex: arg1 };
      obj.selectionStates = map.set(selectionStates.storeListingId, obj);
      tmp3 = obj;
    }
    return tmp3;
  });
};
