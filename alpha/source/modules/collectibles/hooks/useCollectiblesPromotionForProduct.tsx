// Module ID: 8840
// Function ID: 8841
// Name: useCollectiblesPromotionForProduct
// Dependencies: [1071, 8841, 8842, 8847, 2]
// Exports: useCollectiblesPromotionForProduct

// Module 8840 (useCollectiblesPromotionForProduct)
import Constants from "Constants" /* 1071 */;
import usePromotionForApplicationDefault from "usePromotionForApplication" /* 8841 */;
import CollectiblesPricingPromotionUtils from "CollectiblesPricingPromotionUtils" /* 8842 */;
import size from "module_2" /* 2 */;

let tmp3;
const CollectiblesPromotionUtils = tmp3(8847);
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
