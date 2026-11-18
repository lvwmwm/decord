// Module ID: 8867
// Function ID: 8868
// Name: useCollectiblesPromotionForProduct
// Dependencies: [1072, 8868, 8869, 8874, 2]
// Exports: useCollectiblesPromotionForProduct

// Module 8867 (useCollectiblesPromotionForProduct)
import Constants from "Constants" /* 1072 */;
import usePromotionForApplicationDefault from "usePromotionForApplication" /* 8868 */;
import CollectiblesPricingPromotionUtils from "CollectiblesPricingPromotionUtils" /* 8869 */;
import size from "module_2" /* 2 */;

let tmp3;
const CollectiblesPromotionUtils = tmp3(8874);
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
