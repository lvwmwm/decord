// Module ID: 8339
// Function ID: 8340
// Name: useCollectiblesShopProducts
// Dependencies: [32, 19, 8340, 7664, 6963, 6964, 8341, 504, 6961, 7663, 8342, 2]
// Exports: useCollectiblesShopProduct, useCollectiblesShopProducts, useFetchResolvedAbsent

// Module 8339 (useCollectiblesShopProducts)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import StorefrontProductActionCreators from "StorefrontProductActionCreators" /* 7663 */;
import CollectiblesShopManager2 from "CollectiblesShopManager" /* 8341 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import StorefrontCollectionStore from "StorefrontCollectionStore" /* 8340 */;
import StorefrontProductStore from "StorefrontProductStore" /* 7664 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 6963 */;
import CollectiblesProductRecord from "CollectiblesProductRecord" /* 6964 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set, set2;

let tmp;
const StorefrontCollectionActionCreators = tmp(8342);
function computeEntryState(arg0) {
  let needsCategory;
  let product;
  let productFetchState;
  ({ productFetchState, needsCategory, product } = arg0);
  let str = "error";
  if ("error" !== productFetchState) {
    str = "error";
    if (!tmp) {
      if (!needsCategory) {
        if ("success" !== productFetchState) {
          let str5;
          if (null == product) {
            str5 = "loading";
          } else {
            str5 = "ready";
            if (needsCategory) {
              str5 = "ready";
            }
          }
          str = str5;
        } else {
          str = "error";
          if (null != product) {
            if (needsCategory) {
              str = "error";
            }
          }
        }
      } else {
        str = "error";
        if ("error" !== tmp2) {
          str = "error";
        }
      }
    }
  }
  return str;
}
function useAbsentIds(arg0) {
  let first;
  let tmp4;
  [first, tmp4] = react.useState(() => {
    set = new Set();
    return set;
  });
  const entries = Object.entries(arg0);
  const found = entries.filter((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "" !== tmp && null != tmp2;
  });
  const mapped = found.map((item) => {
    let tmp;
    [tmp] = item;
    return tmp;
  });
  const someResult = mapped.some((item) => !first.has(item));
  set = first;
  const obj = react;
  if (someResult) {
    let _Set = Set;
    let items = [];
    HermesBuiltin.arraySpread(items, mapped, HermesBuiltin.arraySpread(items, first, 0));
    const self = this;
    const self2 = this;
    set = new Set(items);
  }
  if (someResult) {
    tmp4(set);
  }
  const entries1 = Object.entries(arg0);
  const found1 = entries1.filter((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const hasItem = "" !== tmp && null == tmp2 && set.has(tmp);
    return hasItem;
  });
  const mapped1 = found1.map((item) => {
    let tmp;
    [tmp] = item;
    return tmp;
  });
  const joined = mapped1.join(",");
  const items1 = [joined];
  return obj.useMemo(() => {
    let items;
    const _Set = Set;
    const str = joined;
    if ("" === joined) {
      items = [];
    } else {
      items = str.split(",");
    }
    const _Set1 = new _Set(items);
    return _Set1;
  }, items1);
}
let result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesShopProducts.tsx");

export const useFetchResolvedAbsent = function useFetchResolvedAbsent(id, arg1) {
  let tmp2;
  let tmp3;
  const obj = { id, sawFetch: false };
  [tmp2, tmp3] = react.useState(obj);
  let flag = tmp2.sawFetch;
  _slicedToArray(react.useState(obj), 2);
  if (tmp2.id !== id) {
    const obj2 = { id, sawFetch: null != arg1 };
    tmp3(obj2);
    flag = tmp8;
  } else {
    const tmp5 = null == arg1 || tmp2.sawFetch;
    if (!tmp5) {
      const obj3 = { id, sawFetch: true };
      tmp3(obj3);
      flag = true;
    }
  }
  return "" !== id && null == arg1 && flag;
};
export const useCollectiblesShopProduct = function useCollectiblesShopProduct(skuId, arg1) {
  let fetchState;
  let products;
  let tmp12;
  let tmp13;
  let tmp20;
  let tmp21;
  _require = skuId;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.needsCategory;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = obj.seedCategoryStore;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = obj.shouldFetchProduct;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let flag4 = obj.includeUnpublished;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = obj.flattenVariants;
  if (flag5 === undefined) {
    flag5 = false;
  }
  fetchState = undefined;
  let str;
  let collection;
  let fetchState2;
  let memo;
  let memo1;
  let closure_13;
  let closure_14;
  let obj2 = flag3;
  let items = [skuId, flag3];
  const effect = flag3.useEffect(() => {
    const tmp = flag3;
    if (tmp) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const items = [skuId];
      const products = CollectiblesShopManager.requestProducts(items);
    }
  }, items);
  let tmp2 = _require;
  const tmp3 = flag;
  let obj3 = require("get initialized");
  let items1 = [flag5];
  const items2 = [skuId];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    const obj = { products: StorefrontProductStore.getProductsForSku(skuId), fetchState: StorefrontProductStore.getFetchStateForSku(skuId) };
    return obj;
  }, items2);
  ({ products, fetchState } = stateFromStoresObject);
  let first;
  if (products != null) {
    first = products[0];
  }
  str = "";
  if (flag) {
    let str2;
    if (first != null) {
      str2 = first.primaryCollectionId;
    }
    if (str2 == null) {
      str2 = "";
    }
    str = str2;
  }
  const items3 = [flag, str, flag4];
  const effect1 = obj2.useEffect(() => {
    const tmp = flag && "" !== str;
    if (tmp) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const items = [str];
      const obj = { includeUnpublished: flag4 };
      const collections = CollectiblesShopManager.requestCollections(items, obj);
    }
  }, items3);
  const items4 = [flag4];
  const items5 = [str];
  const tmp2Result = tmp2(tmp3[7]);
  const stateFromStoresObject1 = tmp2Result.useStateFromStoresObject(items4, () => {
    const obj = { collection: StorefrontCollectionStore.getCollection(str), fetchState: StorefrontCollectionStore.getFetchState(str) };
    return obj;
  }, items5);
  collection = stateFromStoresObject1.collection;
  fetchState2 = stateFromStoresObject1.fetchState;
  const items6 = [first, flag5, skuId];
  memo = obj2.useMemo(() => {
    let tmp2 = null;
    if (null != first) {
      let tmp5;
      const fromStorefrontProductRecord = CollectiblesProductRecord.fromStorefrontProductRecord;
      if (flag5) {
        tmp5 = skuId;
      }
      const obj = { flattenVariantSkuId: tmp5 };
      let result = fromStorefrontProductRecord(tmp, obj);
      if (result == null) {
        result = null;
      }
      tmp2 = result;
    }
    return tmp2;
  }, items6);
  const items7 = [flag, collection];
  memo1 = obj2.useMemo(() => {
    let result = null;
    if (flag) {
      result = null;
      if (null != collection) {
        result = CollectiblesCategoryRecord.fromStorefrontCollectionRecord(tmp2);
      }
    }
    return result;
  }, items7);
  const obj4 = { id: skuId, sawFetch: false };
  [tmp12, tmp13] = flag2(obj2.useState(obj4), 2);
  let flag6 = tmp12.sawFetch;
  flag2(obj2.useState(obj4), 2);
  if (tmp12.id !== skuId) {
    const obj5 = { id: skuId, sawFetch: null != fetchState };
    tmp13(obj5);
    flag6 = tmp16;
  } else {
    const tmp14 = null == fetchState || tmp12.sawFetch;
    if (!tmp14) {
      const obj6 = { id: skuId, sawFetch: true };
      tmp13(obj6);
      flag6 = true;
    }
  }
  closure_13 = tmp18;
  let str3 = "";
  if (flag) {
    str3 = str;
  }
  [tmp20, tmp21] = flag2(obj2.useState({ id: str3, sawFetch: false }), 2);
  let flag7 = tmp20.sawFetch;
  flag2(obj2.useState({ id: str3, sawFetch: false }), 2);
  if (tmp20.id !== str3) {
    const obj7 = { id: str3, sawFetch: null != fetchState2 };
    tmp21(obj7);
    flag7 = tmp24;
  } else {
    const tmp22 = null == fetchState2 || tmp20.sawFetch;
    if (!tmp22) {
      const obj8 = { id: str3, sawFetch: true };
      tmp21(obj8);
      flag7 = true;
    }
  }
  closure_14 = tmp26;
  const items8 = [fetchState, "" !== skuId && null == fetchState && flag6, fetchState2, "" !== str3 && null == fetchState2 && flag7, flag, str, memo, memo1];
  const items9 = [flag2, memo];
  const memo2 = obj2.useMemo(() => {
    str = "error";
    if ("error" !== fetchState) {
      str = "error";
      if (!tmp2) {
        if (!flag) {
          if ("success" !== tmp) {
            let str5;
            if (null == memo) {
              str5 = "loading";
            } else {
              str5 = "ready";
              if (flag) {
                str5 = "ready";
              }
            }
            str = str5;
          } else {
            str = "error";
            if (null != memo) {
              if (flag) {
                str = "error";
              }
            }
          }
        } else {
          str = "error";
          if ("error" !== tmp3) {
            str = "error";
          }
        }
      }
    }
    return str;
  }, items8);
  const effect2 = obj2.useEffect(() => {
    const tmp = flag2 && null != memo;
    if (tmp) {
      const obj = CollectiblesActionCreators;
      const result = obj.seedCollectiblesProductFromStandaloneLoad(memo);
    }
  }, items9);
  const items10 = [skuId, flag, str, flag4];
  const obj9 = {
    product: memo,
    category: memo1,
    state: memo2,
    retry: obj2.useCallback(() => {
      let items;
      let items1;
      const obj2 = { skuIds: items, ignoreCache: true };
      items = [skuId];
      const obj = StorefrontProductActionCreators;
      const result = obj.maybeFetchProductsBySkuIds(obj2);
      let tmp4 = flag;
      if (tmp4) {
        tmp4 = "" !== str;
      }
      if (tmp4) {
        const obj3 = { collectionIds: items1, includeUnpublishedCollections: flag4, includeUnpublishedProducts: flag4, ignoreCache: true };
        items1 = [str];
        const tmpResult = StorefrontCollectionActionCreators;
        const result1 = tmpResult.maybeFetchCollectionsWithProducts(obj3);
      }
    }, items10)
  };
  return obj9;
};
export const useCollectiblesShopProducts = function useCollectiblesShopProducts(skuIds, arg1) {
  _require = skuIds;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.needsCategory;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.flattenVariants;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let memo;
  let stateFromStoresObject1;
  let items = [skuIds];
  memo = memo.useMemo(() => skuIds.filter((item) => "" !== item), items);
  const items1 = [memo.join(",")];
  const effect = memo.useEffect(() => {
    if (memo.length > 0) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const products = CollectiblesShopManager.requestProducts(tmp);
    }
  }, items1);
  let obj3 = require("get initialized");
  const items2 = [stateFromStoresObject1];
  const items3 = [memo];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
    const obj = {};
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let productsForSku = StorefrontProductStore.getProductsForSku(nextResult);
      let first;
      if (productsForSku != null) {
        first = productsForSku[0];
      }
      obj[nextResult] = first;
      continue;
    }
    return obj;
  }, items3);
  let obj4 = require("get initialized");
  const items4 = [stateFromStoresObject1];
  const items5 = [memo];
  stateFromStoresObject1 = obj4.useStateFromStoresObject(items4, () => {
    const obj = {};
    for (const item10006 of memo) {
      obj[item10006] = StorefrontProductStore.getFetchStateForSku(item10006);
      continue;
    }
    return obj;
  }, items5);
  const items6 = [memo, stateFromStoresObject, flag];
  const memo1 = memo.useMemo(() => {
    const obj = {};
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let str = "";
      if (flag) {
        let tmp7 = stateFromStoresObject[tmp3];
        let str2;
        if (tmp7 != null) {
          str2 = tmp7.primaryCollectionId;
        }
        if (str2 == null) {
          str2 = "";
        }
        str = str2;
      }
      obj[nextResult] = str;
      continue;
    }
    return obj;
  }, items6);
  const items7 = [memo1];
  const memo2 = memo.useMemo(() => {
    const f114256 = (item) => "" !== item;
    const values = Object.values(memo1);
    const items = [...new Set(values.filter(f114256))];
    new Set(values.filter(f114256));
    return items;
  }, items7);
  const items8 = [flag, memo2.join(",")];
  const effect1 = memo.useEffect(() => {
    const tmp = flag && memo2.length > 0;
    if (tmp) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const collections = CollectiblesShopManager.requestCollections(memo2);
    }
  }, items8);
  const items9 = [stateFromStoresObject];
  const items10 = [memo2];
  const obj6 = require("get initialized");
  const stateFromStoresObject2 = obj6.useStateFromStoresObject(items9, () => {
    const obj = {};
    for (const item10006 of memo2) {
      obj[item10006] = StorefrontCollectionStore.getCollection(item10006);
      continue;
    }
    return obj;
  }, items10);
  const items11 = [stateFromStoresObject];
  const items12 = [memo2];
  const obj7 = require("get initialized");
  const stateFromStoresObject3 = obj7.useStateFromStoresObject(items11, () => {
    const obj = {};
    for (const item10006 of memo2) {
      obj[item10006] = StorefrontCollectionStore.getFetchState(item10006);
      continue;
    }
    return obj;
  }, items12);
  let tmp8 = stateFromStoresObject3(stateFromStoresObject1);
  set = tmp8;
  let tmp9 = stateFromStoresObject3(stateFromStoresObject3);
  set2 = tmp9;
  const items13 = [memo, stateFromStoresObject, stateFromStoresObject1, memo1, stateFromStoresObject2, stateFromStoresObject3, tmp8, tmp9, flag, flag2];
  return memo.useMemo(() => {
    let hasItem;
    let obj4;
    let tmp29;
    let tmp32;
    const obj = {};
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = stateFromStoresObject[nextResult];
      let tmp7 = stateFromStoresObject1[nextResult];
      let str = memo1[nextResult];
      if (str == null) {
        str = "";
      }
      let tmp9 = str;
      let tmp11 = stateFromStoresObject2[str];
      if (tmp11 == null) {
        tmp11 = null;
      }
      let tmp12 = tmp11;
      let tmp15 = stateFromStoresObject3[tmp9];
      let tmp17 = null;
      if (null != tmp5) {
        let tmp21;
        let fromStorefrontProductRecord = CollectiblesProductRecord.fromStorefrontProductRecord;
        if (flag2) {
          tmp21 = nextResult;
        }
        let obj2 = { flattenVariantSkuId: tmp21 };
        let result = fromStorefrontProductRecord(tmp5, obj2);
        if (result == null) {
          result = null;
        }
        tmp17 = result;
      }
      let tmp23 = tmp17;
      let result1 = null;
      let tmp24 = flag;
      if (tmp24) {
        result1 = null;
        if (null != tmp12) {
          result1 = CollectiblesCategoryRecord.fromStorefrontCollectionRecord(tmp12);
        }
      }
      let obj3 = { product: tmp23, category: result1, state: tmp32(obj4) };
      obj4 = { productFetchState: tmp7, productAbsent: set.has(tmp3), collectionFetchState: tmp15, collectionAbsent: hasItem, needsCategory: tmp24, collectionId: tmp9, product: tmp23, category: tmp29 };
      tmp29 = result1;
      tmp32 = computeEntryState;
      hasItem = "" !== tmp9;
      if (hasItem) {
        hasItem = set2.has(tmp9);
      }
      obj[tmp3] = obj3;
      continue;
    }
    return obj;
  }, items13);
};
