// Module ID: 9454
// Function ID: 9455
// Name: useCollectiblesPromotionForProduct
// Dependencies: [1072, 9455, 9456, 9459, 2]
// Exports: useCollectiblesPromotionForProduct

// Module 9454 (useCollectiblesPromotionForProduct)
import Constants from "Constants" /* 1072 */;
import usePromotionForApplicationDefault from "usePromotionForApplication" /* 9455 */;
import CollectiblesPricingPromotionUtils from "CollectiblesPricingPromotionUtils" /* 9456 */;
import size from "module_2" /* 2 */;

let tmp3;
const CollectiblesPromotionUtils = tmp3(9459);
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
