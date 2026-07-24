// Module ID: 8250
// Function ID: 65122
// Name: useFetchCollectiblesProduct
// Dependencies: [57, 31, 4175, 6774, 653, 624, 1876, 6773, 2]
// Exports: useFetchCollectiblesProduct

// Module 8250 (useFetchCollectiblesProduct)
import _slicedToArray from "_slicedToArray";
import { useEffect } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { SKUProductLines } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProduct.tsx");

export const useFetchCollectiblesProduct = function useFetchCollectiblesProduct(skuId, arg1) {
  const _require = skuId;
  const dependencyMap = arg1;
  let obj = _require(624);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let value = null;
    if (null != closure_0) {
      value = tmp6.get(closure_0);
    }
    return value;
  });
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = stateFromStores.productLine !== SKUProductLines.COLLECTIBLES;
  }
  const callback = tmp2;
  const items1 = [stateFromStores1];
  const tmp4 = callback(_require(624).useStateFromStoresArray(items1, () => {
    const items = [stateFromStores1.getProduct(closure_0), stateFromStores1.getProductFetch(closure_0)];
    return items;
  }), 2);
  const first = tmp4[0];
  _isNativeReflectConstruct = tmp6;
  const obj2 = _require(624);
  const items2 = [stateFromStores1];
  stateFromStores1 = _require(624).useStateFromStores(items2, () => stateFromStores1.isProductFetchBackedOff(closure_0));
  let tmp8 = true === arg1;
  if (tmp8) {
    let type;
    if (null != first) {
      type = first.type;
    }
    tmp8 = type === _require(1876).CollectiblesItemType.BUNDLE;
  }
  if (tmp8) {
    tmp8 = 0 === first.items.length;
  }
  SKUProductLines = tmp8;
  const items3 = [skuId, first, tmp2, tmp4[1], arg1, tmp8, stateFromStores1];
  first(() => {
    let tmp = null == skuId;
    if (!tmp) {
      let tmp3 = null != first;
      if (tmp3) {
        tmp3 = !closure_6;
      }
      tmp = tmp3;
    }
    if (!tmp) {
      tmp = _slicedToArray;
    }
    if (!tmp) {
      let state;
      if (null != tmp6) {
        state = tmp6.state;
      }
      tmp = "fetching" === state;
    }
    if (!tmp) {
      tmp = stateFromStores1;
    }
    if (!tmp) {
      let obj = skuId(table[7]);
      obj = { includeBundles: table };
      const collectiblesProduct = obj.fetchCollectiblesProduct(skuId, obj);
    }
  }, items3);
  obj = { product: first };
  let state;
  if (null != tmp4[1]) {
    state = tmp6.state;
  }
  obj.isFetching = "fetching" === state;
  return obj;
};
