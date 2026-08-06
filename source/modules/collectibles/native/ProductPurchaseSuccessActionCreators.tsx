// Module ID: 10042
// Function ID: 10043
// Name: MODAL_KEY
// Dependencies: [5, 4490, 10043, 1988, 2]

// Module 10042 (MODAL_KEY)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
const ShopProductPurchaseSuccessModal = "ShopProductPurchaseSuccessModal";
const result = require("CancelButton").fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4490).pushLazy(callback(function*() {
      yield v0(outer1_2[3])(outer1_2[2], outer1_2.paths);
      return arg1.default;
    }), closure_0, ShopProductPurchaseSuccessModal);
  },
  close() {
    importDefault(4490).popWithKey(ShopProductPurchaseSuccessModal);
  }
};
export const MODAL_KEY = "ShopProductPurchaseSuccessModal";
