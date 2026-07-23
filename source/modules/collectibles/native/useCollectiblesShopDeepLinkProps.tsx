// Module ID: 14477
// Function ID: 110604
// Name: useCollectiblesShopDeepLinkProps
// Dependencies: [31, 6774, 6791, 566, 6785, 2]
// Exports: useCollectiblesShopDeepLinkProps

// Module 14477 (useCollectiblesShopDeepLinkProps)
import { useMemo } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

let closure_5 = {};
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx");

export const useCollectiblesShopDeepLinkProps = function useCollectiblesShopDeepLinkProps(categories) {
  categories = categories.categories;
  const products = categories.products;
  const items = [initialBaseProductSkuId, initialVariantIndex];
  const stateFromStoresObject = categories(products[3]).useStateFromStoresObject(items, () => {
    const initialProductSkuId = initialVariantIndex.initialProductSkuId;
    const product = initialBaseProductSkuId.getProduct(initialProductSkuId);
    let skuId = initialProductSkuId;
    let num = 0;
    if (null != product) {
      skuId = initialProductSkuId;
      num = 0;
      if (null != product.variantGroupStoreListingId) {
        const productByStoreListingId = initialBaseProductSkuId.getProductByStoreListingId(product.variantGroupStoreListingId);
        let isVariantProduct = null != productByStoreListingId;
        if (isVariantProduct) {
          let obj = categories(products[4]);
          isVariantProduct = obj.getIsVariantProduct(productByStoreListingId);
        }
        skuId = initialProductSkuId;
        num = 0;
        if (isVariantProduct) {
          skuId = productByStoreListingId.skuId;
          const _Math = Math;
          const variants = productByStoreListingId.variants;
          num = Math.max(0, variants.findIndex((skuId) => skuId.skuId === initialProductSkuId));
        }
      }
    }
    obj = {};
    const categoryForProduct = initialBaseProductSkuId.getCategoryForProduct(initialProductSkuId);
    skuId = undefined;
    if (null != categoryForProduct) {
      skuId = categoryForProduct.skuId;
    }
    obj.initialCategorySkuId = skuId;
    obj.initialBaseProductSkuId = skuId;
    obj.initialVariantIndex = num;
    return obj;
  });
  const initialCategorySkuId = stateFromStoresObject.initialCategorySkuId;
  initialBaseProductSkuId = stateFromStoresObject.initialBaseProductSkuId;
  initialVariantIndex = stateFromStoresObject.initialVariantIndex;
  const items1 = [initialBaseProductSkuId, initialVariantIndex, initialCategorySkuId, products, categories];
  return initialCategorySkuId(() => {
    if (null != initialBaseProductSkuId) {
      if (null != initialCategorySkuId) {
        let obj = { initialProductSkuId: initialBaseProductSkuId, initialVariantIndex, initialCategorySkuId };
        let bound;
        if (null != products) {
          const _Math = Math;
          bound = Math.max(0, products.findIndex((skuId) => skuId.skuId === outer1_3));
        }
        obj.productIndex = bound;
        let bound1;
        if (null != categories) {
          const _Math2 = Math;
          bound1 = Math.max(0, categories.findIndex((skuId) => skuId.skuId === outer1_2));
        }
        obj.categoryIndex = bound1;
      }
      return obj;
    }
    obj = outer1_5;
  }, items1);
};
