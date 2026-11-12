// Module ID: 9376
// Function ID: 9377
// Name: useCollectiblesPromotionForProduct
// Dependencies: [1072, 9377, 9378, 9381, 2]
// Exports: useCollectiblesPromotionForProduct

// Module 9376 (useCollectiblesPromotionForProduct)
import Constants from "Constants" /* 1072 */;
import usePromotionForApplicationDefault from "usePromotionForApplication" /* 9377 */;
import CollectiblesPricingPromotionUtils from "CollectiblesPricingPromotionUtils" /* 9378 */;
import size from "module_2" /* 2 */;

let tmp3;
const CollectiblesPromotionUtils = tmp3(9381);
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
