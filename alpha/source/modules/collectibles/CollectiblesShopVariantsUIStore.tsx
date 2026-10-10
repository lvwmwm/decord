// Module ID: 9031
// Function ID: 9032
// Name: CollectiblesShopVariantsUIStore
// Dependencies: [1267, 4733, 558, 576, 8968, 7274, 2]
// Exports: setSelectedVariantIndex

// Module 9031 (CollectiblesShopVariantsUIStore)
import _slicedToArray from "_slicedToArray" /* 4733 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7274 */;
import module_1267 from "module_1267" /* 1267 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, map;

const state = module_1267.createWithEqualityFn(() => {
  const obj = { selectionStates: new Map() };
  new Map();
  return obj;
}, _slicedToArray.shallow);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedVariantIndex(arg0) {
  let closure_0;
  let tmp3;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(2);
  const obj2 = require("useDefaultVariantIndex");
  let defaultVariantIndex = obj2.useDefaultVariantIndex(arg0);
  if (cResult[0] !== arg0) {
    const fn = function s(selectionStates) {
      let tmp2 = null;
      if (null != closure_0) {
        tmp2 = null;
        const obj = CollectiblesProductUtils;
        if (obj.getIsVariantProduct(closure_0)) {
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
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  const tmp4 = state(tmp3);
  if (null != tmp4) {
    const _Math = Math;
    defaultVariantIndex = Math.max(0, tmp4);
  }
  return defaultVariantIndex;
}) : (function useSelectedVariantIndex(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("useDefaultVariantIndex");
  let defaultVariantIndex = obj.useDefaultVariantIndex(arg0);
  let tmp2 = state((selectionStates) => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = null;
      const obj = CollectiblesProductUtils;
      if (obj.getIsVariantProduct(closure_0)) {
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
});
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesShopVariantsUIStore.tsx");

export const useSelectedVariantIndex = tmp2;
export const setSelectedVariantIndex = function setSelectedVariantIndex(arg0, arg1) {
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
};
