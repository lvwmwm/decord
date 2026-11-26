// Module ID: 11277
// Function ID: 11278
// Name: useCollectiblesPromotionForProduct
// Dependencies: [1071, 11248, 11250, 11278, 2]
// Exports: useCollectiblesPromotionForProduct

// Module 11277 (useCollectiblesPromotionForProduct)
import Constants from "Constants" /* 1071 */;
import usePromotionForApplicationDefault from "usePromotionForApplication" /* 11248 */;
import CollectiblesPricingPromotionUtils from "CollectiblesPricingPromotionUtils" /* 11250 */;
import size from "module_2" /* 2 */;

let tmp3;
const CollectiblesPromotionUtils = tmp3(11278);
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
