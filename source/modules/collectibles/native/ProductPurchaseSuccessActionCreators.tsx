// Module ID: 9764
// Function ID: 75937
// Name: MODAL_KEY
// Dependencies: []

// Module 9764 (MODAL_KEY)
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
