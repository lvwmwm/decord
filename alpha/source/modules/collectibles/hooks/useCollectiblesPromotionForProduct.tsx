// Module ID: 11278
// Function ID: 11279
// Name: useCollectiblesPromotionForProduct
// Dependencies: [1071, 11249, 11251, 11279, 2]
// Exports: useCollectiblesPromotionForProduct

// Module 11278 (useCollectiblesPromotionForProduct)
import Constants from "Constants" /* 1071 */;
import usePromotionForApplicationDefault from "usePromotionForApplication" /* 11249 */;
import CollectiblesPricingPromotionUtils from "CollectiblesPricingPromotionUtils" /* 11251 */;
import size from "module_2" /* 2 */;

let tmp3;
const CollectiblesPromotionUtils = tmp3(11279);
let closure_3 = Constants.COLLECTIBLES_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesPromotionForProduct.tsx");

export function useCollectiblesPromotionForProduct(selectedProduct) {
  const tmp2 = usePromotionForApplicationDefault(closure_3);
  CollectiblesPricingPromotionUtils;
  let promotionForCollectiblesProduct = null;
  if (null != selectedProduct) {
    const tmp3Result = CollectiblesPromotionUtils;
    promotionForCollectiblesProduct = tmp3Result.getPromotionForCollectiblesProduct(selectedProduct, tmp2, tmp5);
  }
  return promotionForCollectiblesProduct;
}
