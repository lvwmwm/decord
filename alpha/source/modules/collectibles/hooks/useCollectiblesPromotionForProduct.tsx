// Module ID: 11231
// Function ID: 11232
// Name: useCollectiblesPromotionForProduct
// Dependencies: [1071, 11202, 11204, 11232, 2]
// Exports: useCollectiblesPromotionForProduct

// Module 11231 (useCollectiblesPromotionForProduct)
import Constants from "Constants" /* 1071 */;
import usePromotionForApplicationDefault from "usePromotionForApplication" /* 11202 */;
import CollectiblesPricingPromotionUtils from "CollectiblesPricingPromotionUtils" /* 11204 */;
import size from "module_2" /* 2 */;

let tmp3;
const CollectiblesPromotionUtils = tmp3(11232);
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
