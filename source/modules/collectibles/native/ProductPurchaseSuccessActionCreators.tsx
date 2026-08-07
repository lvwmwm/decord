// Module ID: 10058
// Function ID: 10059
// Name: MODAL_KEY
// Dependencies: [5, 4507, 10059, 1988, 2]

// Module 10058 (MODAL_KEY)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
const ShopProductPurchaseSuccessModal = "ShopProductPurchaseSuccessModal";
const result = require("CancelButton").fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4507).pushLazy(callback(function*() {
      yield v0(outer1_2[3])(outer1_2[2], outer1_2.paths);
      return arg1.default;
    }), closure_0, ShopProductPurchaseSuccessModal);
  },
  close() {
    importDefault(4507).popWithKey(ShopProductPurchaseSuccessModal);
  }
};
export const MODAL_KEY = "ShopProductPurchaseSuccessModal";
