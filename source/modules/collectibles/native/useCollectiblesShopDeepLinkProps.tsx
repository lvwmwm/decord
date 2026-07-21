// Module ID: 14355
// Function ID: 108408
// Name: useCollectiblesShopDeepLinkProps
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: useCollectiblesShopDeepLinkProps

// Module 14355 (useCollectiblesShopDeepLinkProps)
import { useMemo } from "result";
import closure_3 from "result";
import closure_4 from "result";
import result from "result";

let closure_5 = {};
result = result.fileFinishedImporting("modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx");

export const useCollectiblesShopDeepLinkProps = function useCollectiblesShopDeepLinkProps(categories) {
  categories = categories.categories;
  const require = categories;
  const products = categories.products;
  const dependencyMap = products;
  const items = [closure_3, closure_4];
  const stateFromStoresObject = require(dependencyMap[3]).useStateFromStoresObject(items, () => {
    const initialProductSkuId = initialVariantIndex.initialProductSkuId;
    const categories = initialProductSkuId;
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
  const useMemo = initialCategorySkuId;
  const initialBaseProductSkuId = stateFromStoresObject.initialBaseProductSkuId;
  closure_3 = initialBaseProductSkuId;
  const initialVariantIndex = stateFromStoresObject.initialVariantIndex;
  closure_4 = initialVariantIndex;
  const items1 = [initialBaseProductSkuId, initialVariantIndex, initialCategorySkuId, products, categories];
  return useMemo(() => {
    if (null != initialBaseProductSkuId) {
      if (null != initialCategorySkuId) {
        let obj = { initialProductSkuId: initialBaseProductSkuId, initialVariantIndex, initialCategorySkuId };
        let bound;
        if (null != products) {
          const _Math = Math;
          bound = Math.max(0, products.findIndex((skuId) => skuId.skuId === closure_3));
        }
        obj.productIndex = bound;
        let bound1;
        if (null != categories) {
          const _Math2 = Math;
          bound1 = Math.max(0, categories.findIndex((skuId) => skuId.skuId === closure_2));
        }
        obj.categoryIndex = bound1;
      }
      return obj;
    }
    obj = closure_5;
  }, items1);
};
