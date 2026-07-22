// Module ID: 9765
// Function ID: 75950
// Name: MODAL_KEY
// Dependencies: []

// Module 9765 (MODAL_KEY)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx");

export default {
  open(closure_2) {
    // CreateGeneratorClosureLongIndex (0x67)
    importDefault(dependencyMap[1]).pushLazy(callback(tmp), closure_2, "ShopProductPurchaseSuccessModal");
  },
  close() {
    importDefault(dependencyMap[1]).popWithKey("ShopProductPurchaseSuccessModal");
  }
};
export const MODAL_KEY = "ShopProductPurchaseSuccessModal";
