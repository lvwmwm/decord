// Module ID: 15424
// Function ID: 15425
// Name: useCollectiblesShopDeepLinkProps
// Dependencies: [19, 6962, 6978, 504, 6973, 2]
// Exports: useCollectiblesShopDeepLinkProps

// Module 15424 (useCollectiblesShopDeepLinkProps)
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6962 */;
import CollectiblesShopStore from "CollectiblesShopStore" /* 6978 */;
import size from "module_2" /* 2 */;

const useMemo = react.useMemo;
let closure_5 = {};
const result = size.fileFinishedImporting("modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx");

export const useCollectiblesShopDeepLinkProps = function useCollectiblesShopDeepLinkProps(categories) {
  categories = categories.categories;
  const products = categories.products;
  let initialBaseProductSkuId;
  let initialVariantIndex;
  let obj = categories(products[3]);
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
          const obj2 = categories(products[4]);
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
};
