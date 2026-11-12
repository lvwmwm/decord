// Module ID: 15328
// Function ID: 15329
// Name: useCollectiblesPromotionForProduct
// Dependencies: [1072, 9671, 15329, 2]
// Exports: useCollectiblesPromotionForProduct

// Module 15328 (useCollectiblesPromotionForProduct)
import Constants from "Constants" /* 1072 */;
import CollectiblesPromotionUtils from "CollectiblesPromotionUtils" /* 15329 */;
import size from "module_2" /* 2 */;

let closure_3 = Constants.COLLECTIBLES_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesPromotionForProduct.tsx");

export function useCollectiblesPromotionForProduct(selectedProduct) {
  let promotionForCollectiblesProduct = null;
  if (null != selectedProduct) {
    const obj = CollectiblesPromotionUtils;
    promotionForCollectiblesProduct = obj.getPromotionForCollectiblesProduct(selectedProduct, tmp2);
  }
  return promotionForCollectiblesProduct;
}
