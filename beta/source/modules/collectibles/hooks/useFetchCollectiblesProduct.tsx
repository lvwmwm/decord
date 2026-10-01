// Module ID: 10508
// Function ID: 10509
// Name: useFetchCollectiblesProduct
// Dependencies: [32, 19, 5822, 6962, 1074, 563, 1974, 6961, 2]
// Exports: useFetchCollectiblesProduct

// Module 10508 (useFetchCollectiblesProduct)
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import SKUStore from "SKUStore" /* 5822 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6962 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const useEffect = react.useEffect;
let SKUProductLines = Constants.SKUProductLines;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProduct.tsx");

export const useFetchCollectiblesProduct = function useFetchCollectiblesProduct(skuId, includeBundles) {
  let closure_2;
  let closure_6;
  let product;
  let state;
  let stateFromStores1;
  let tmp8;
  _require = skuId;
  dependencyMap = includeBundles;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("useStateFromStores");
  let items = [state];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let value = null;
    if (null != skuId) {
      value = SKUStore.get(tmp);
    }
    return value;
  });
  let tmp4 = null != stateFromStores;
  if (tmp4) {
    tmp4 = stateFromStores.productLine !== SKUProductLines.COLLECTIBLES;
  }
  _slicedToArray = tmp4;
  const items1 = [stateFromStores1];
  const tmpResult = tmp(563);
  [product, tmp8] = tmpResult.useStateFromStoresArray(items1, () => {
    const items = [CollectiblesCategoryStore.getProduct(skuId), CollectiblesCategoryStore.getProductFetch(skuId)];
    return items;
  });
  state = tmp8;
  const items2 = [stateFromStores1];
  const tmpResult2 = tmp(563);
  stateFromStores1 = tmpResult2.useStateFromStores(items2, () => CollectiblesCategoryStore.isProductFetchBackedOff(skuId));
  let tmp10 = true === includeBundles;
  if (tmp10) {
    let type;
    if (product != null) {
      type = product.type;
    }
    tmp10 = type === tmp(1974).CollectiblesItemType.BUNDLE;
  }
  if (tmp10) {
    tmp10 = 0 === product.items.length;
  }
  SKUProductLines = tmp10;
  const items3 = [skuId, product, tmp4, tmp8, includeBundles, tmp10, stateFromStores1];
  product(() => {
    let tmp2 = null == skuId;
    const tmp = skuId;
    if (!tmp2) {
      tmp2 = null != first && !closure_6;
      const tmp4 = null != first && !closure_6;
    }
    if (!tmp2) {
      tmp2 = closure_2;
    }
    if (!tmp2) {
      state = undefined;
      if (state != null) {
        state = state.state;
      }
      tmp2 = "fetching" === state;
    }
    if (!tmp2) {
      tmp2 = stateFromStores1;
    }
    if (!tmp2) {
      const obj2 = { includeBundles };
      const obj = CollectiblesActionCreators;
      const collectiblesProduct = obj.fetchCollectiblesProduct(tmp, obj2);
    }
  }, items3);
  let obj2 = { product, isFetching: "fetching" === state };
  state = undefined;
  if (tmp8 != null) {
    state = tmp8.state;
  }
  return obj2;
};
