// Module ID: 8198
// Function ID: 64844
// Name: useFetchCollectiblesProduct
// Dependencies: [31, 27, 8208, 33, 5232, 4126, 689, 44, 1876]
// Exports: useFetchCollectiblesProduct

// Module 8198 (useFetchCollectiblesProduct)
import module_31 from "module_31";
import { useEffect } from "get ActivityIndicator";
import SAMPLE_PROFILE_ASPECT_RATIO from "SAMPLE_PROFILE_ASPECT_RATIO";
import module_33 from "module_33";
import { SKUProductLines } from "preload";
import CollectiblesItemType from "CollectiblesItemType";

const result = CollectiblesItemType.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProduct.tsx");

export const useFetchCollectiblesProduct = function useFetchCollectiblesProduct(skuId, arg1) {
  arg1 = skuId;
  const dependencyMap = arg1;
  let obj = arg1(dependencyMap[5]);
  const items = [SAMPLE_PROFILE_ASPECT_RATIO];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let value = null;
    if (null != arg0) {
      value = tmp6.get(arg0);
    }
    return value;
  });
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = stateFromStores.productLine !== SKUProductLines.COLLECTIBLES;
  }
  const callback = tmp2;
  const items1 = [module_33];
  const tmp4 = callback(arg1(dependencyMap[5]).useStateFromStoresArray(items1, () => {
    const items = [stateFromStores1.getProduct(arg0), stateFromStores1.getProductFetch(arg0)];
    return items;
  }), 2);
  const first = tmp4[0];
  const useEffect = first;
  SAMPLE_PROFILE_ASPECT_RATIO = tmp6;
  const obj2 = arg1(dependencyMap[5]);
  const items2 = [module_33];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items2, () => stateFromStores1.isProductFetchBackedOff(arg0));
  module_33 = stateFromStores1;
  let tmp8 = true === arg1;
  if (tmp8) {
    let type;
    if (null != first) {
      type = first.type;
    }
    tmp8 = type === arg1(dependencyMap[6]).CollectiblesItemType.BUNDLE;
  }
  if (tmp8) {
    tmp8 = 0 === first.items.length;
  }
  const SKUProductLines = tmp8;
  const items3 = [skuId, first, tmp2, tmp4[1], arg1, tmp8, stateFromStores1];
  useEffect(() => {
    let tmp = null == arg0;
    if (!tmp) {
      let tmp3 = null != first;
      if (tmp3) {
        tmp3 = !tmp8;
      }
      tmp = tmp3;
      const tmp2 = first;
    }
    if (!tmp) {
      tmp = tmp2;
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
      let obj = arg0(arg1[7]);
      obj = { includeBundles: arg1 };
      const collectiblesProduct = obj.fetchCollectiblesProduct(arg0, obj);
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
