// Module ID: 16185
// Function ID: 16186
// Name: useCollectiblesShopDeepLinkProps
// Dependencies: [19, 7263, 7280, 558, 576, 7274, 504, 2]

// Module 16185 (useCollectiblesShopDeepLinkProps)
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7263 */;
import CollectiblesShopStore from "CollectiblesShopStore" /* 7280 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useMemo = react.useMemo;
let closure_5 = {};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCollectiblesShopDeepLinkProps(arg0) {
  let categories;
  let initialBaseProductSkuId;
  let initialCategorySkuId;
  let products;
  let tmp4;
  let tmp5;
  const obj = initialCategorySkuId(initialBaseProductSkuId[4]);
  const cResult = obj.c(14);
  ({ categories, products } = arg0);
  const tmp = initialCategorySkuId;
  const tmp2 = initialBaseProductSkuId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesCategoryStore, CollectiblesShopStore];
    const fn = function s() {
      initialProductSkuId = initialProductSkuId.initialProductSkuId;
      product = product.getProduct(initialProductSkuId);
      let initialVariantIndex = 0;
      initialBaseProductSkuId = initialProductSkuId;
      if (null != product) {
        initialVariantIndex = 0;
        initialBaseProductSkuId = initialProductSkuId;
        if (null != product.variantGroupStoreListingId) {
          const productByStoreListingId = obj.getProductByStoreListingId(product.variantGroupStoreListingId);
          let isVariantProduct = null != productByStoreListingId;
          if (isVariantProduct) {
            const obj2 = initialCategorySkuId(initialBaseProductSkuId[5]);
            isVariantProduct = obj2.getIsVariantProduct(productByStoreListingId);
          }
          initialVariantIndex = 0;
          initialBaseProductSkuId = initialProductSkuId;
          if (isVariantProduct) {
            initialBaseProductSkuId = productByStoreListingId.skuId;
            const _Math = Math;
            const variants = productByStoreListingId.variants;
            initialVariantIndex = Math.max(0, variants.findIndex((skuId) => skuId.skuId === initialProductSkuId));
          }
        }
      }
      const categoryForProduct = obj.getCategoryForProduct(initialProductSkuId);
      initialCategorySkuId = undefined;
      if (categoryForProduct != null) {
        initialCategorySkuId = categoryForProduct.skuId;
      }
      return { initialCategorySkuId, initialBaseProductSkuId, initialVariantIndex };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[6]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  initialCategorySkuId = stateFromStoresObject.initialCategorySkuId;
  initialBaseProductSkuId = stateFromStoresObject.initialBaseProductSkuId;
  let initialVariantIndex = stateFromStoresObject.initialVariantIndex;
  if (null != initialBaseProductSkuId) {
    let tmp9;
    if (null != initialCategorySkuId) {
      if (cResult[2] === initialBaseProductSkuId) {
        let tmp10;
        if (cResult[3] === products) {
          tmp10 = cResult[4];
        }
        if (cResult[5] === categories) {
          let tmp12;
          if (cResult[6] === initialCategorySkuId) {
            tmp12 = cResult[7];
          }
          if (cResult[8] === initialBaseProductSkuId) {
            if (cResult[9] === initialCategorySkuId) {
              if (cResult[10] === initialVariantIndex) {
                if (cResult[11] === tmp10) {
                  let tmp14;
                  if (cResult[12] === tmp12) {
                    tmp14 = cResult[13];
                  }
                  tmp9 = tmp14;
                }
              }
            }
          }
          let obj2 = { initialProductSkuId: initialBaseProductSkuId, initialVariantIndex, initialCategorySkuId, productIndex: tmp10, categoryIndex: tmp12 };
          cResult[8] = initialBaseProductSkuId;
          cResult[9] = initialCategorySkuId;
          cResult[10] = initialVariantIndex;
          cResult[11] = tmp10;
          cResult[12] = tmp12;
          cResult[13] = obj2;
          tmp14 = obj2;
        }
        let bound;
        if (null != categories) {
          const _Math2 = Math;
          bound = Math.max(0, categories.findIndex((skuId) => skuId.skuId === initialCategorySkuId));
        }
        cResult[5] = categories;
        cResult[6] = initialCategorySkuId;
        cResult[7] = bound;
        tmp12 = bound;
      }
      let bound1;
      if (null != products) {
        let _Math = Math;
        bound1 = Math.max(0, products.findIndex((skuId) => skuId.skuId === initialBaseProductSkuId));
      }
      cResult[2] = initialBaseProductSkuId;
      cResult[3] = products;
      cResult[4] = bound1;
      tmp10 = bound1;
    }
    return tmp9;
  }
  tmp9 = closure_5;
}) : (function useCollectiblesShopDeepLinkProps(categories) {
  categories = categories.categories;
  const products = categories.products;
  let initialBaseProductSkuId;
  let initialVariantIndex;
  let obj = categories(products[6]);
  const items = [initialBaseProductSkuId, initialVariantIndex];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const initialProductSkuId = initialVariantIndex.initialProductSkuId;
    const product = initialBaseProductSkuId.getProduct(initialProductSkuId);
    initialVariantIndex = 0;
    initialBaseProductSkuId = initialProductSkuId;
    if (null != product) {
      initialVariantIndex = 0;
      initialBaseProductSkuId = initialProductSkuId;
      if (null != product.variantGroupStoreListingId) {
        const productByStoreListingId = obj.getProductByStoreListingId(product.variantGroupStoreListingId);
        let isVariantProduct = null != productByStoreListingId;
        if (isVariantProduct) {
          const obj2 = categories(products[5]);
          isVariantProduct = obj2.getIsVariantProduct(productByStoreListingId);
        }
        initialVariantIndex = 0;
        initialBaseProductSkuId = initialProductSkuId;
        if (isVariantProduct) {
          initialBaseProductSkuId = productByStoreListingId.skuId;
          const _Math = Math;
          const variants = productByStoreListingId.variants;
          initialVariantIndex = Math.max(0, variants.findIndex((skuId) => skuId.skuId === initialProductSkuId));
        }
      }
    }
    const categoryForProduct = obj.getCategoryForProduct(initialProductSkuId);
    initialCategorySkuId = undefined;
    if (categoryForProduct != null) {
      initialCategorySkuId = categoryForProduct.skuId;
    }
    return { initialCategorySkuId, initialBaseProductSkuId, initialVariantIndex };
  });
  let initialCategorySkuId = stateFromStoresObject.initialCategorySkuId;
  initialBaseProductSkuId = stateFromStoresObject.initialBaseProductSkuId;
  initialVariantIndex = stateFromStoresObject.initialVariantIndex;
  const items1 = [initialBaseProductSkuId, initialVariantIndex, initialCategorySkuId, products, categories];
  return initialCategorySkuId(() => {
    let bound;
    let bound1;
    if (null != initialBaseProductSkuId) {
      let obj2;
      if (null != initialCategorySkuId) {
        obj2 = { initialProductSkuId: tmp, initialVariantIndex, initialCategorySkuId: tmp6, productIndex: bound, categoryIndex: bound1 };
        bound = undefined;
        const obj3 = products;
        if (null != products) {
          const _Math = Math;
          bound = Math.max(0, obj3.findIndex((skuId) => skuId.skuId === initialBaseProductSkuId));
        }
        bound1 = undefined;
        const obj = categories;
        if (null != categories) {
          const _Math2 = Math;
          bound1 = Math.max(0, obj.findIndex((skuId) => skuId.skuId === initialCategorySkuId));
        }
      }
      return obj2;
    }
    obj2 = closure_5;
  }, items1);
});
const result = size.fileFinishedImporting("modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx");

export const useCollectiblesShopDeepLinkProps = tmp2;
