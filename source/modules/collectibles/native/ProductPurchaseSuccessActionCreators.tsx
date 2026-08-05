// Module ID: 10011
// Function ID: 10012
// Name: MODAL_KEY
// Dependencies: [5, 4460, 10012, 1959, 2]

// Module 10011 (MODAL_KEY)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
const ShopProductPurchaseSuccessModal = "ShopProductPurchaseSuccessModal";
const result = require("CancelButton").fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4460).pushLazy(callback(function*() {
      yield v0(outer1_2[3])(outer1_2[2], outer1_2.paths);
      return arg1.default;
    }), closure_0, ShopProductPurchaseSuccessModal);
  },
  close() {
    importDefault(4460).popWithKey(ShopProductPurchaseSuccessModal);
  }
};
export const MODAL_KEY = "ShopProductPurchaseSuccessModal";
