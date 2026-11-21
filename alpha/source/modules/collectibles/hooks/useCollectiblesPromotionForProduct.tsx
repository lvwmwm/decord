// Module ID: 8960
// Function ID: 8961
// Name: useCollectiblesPromotionForProduct
// Dependencies: [1071, 8961, 8962, 8967, 2]
// Exports: useCollectiblesPromotionForProduct

// Module 8960 (useCollectiblesPromotionForProduct)
import Constants from "Constants" /* 1071 */;
import usePromotionForApplicationDefault from "usePromotionForApplication" /* 8961 */;
import CollectiblesPricingPromotionUtils from "CollectiblesPricingPromotionUtils" /* 8962 */;
import size from "module_2" /* 2 */;

let tmp3;
const CollectiblesPromotionUtils = tmp3(8967);
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
