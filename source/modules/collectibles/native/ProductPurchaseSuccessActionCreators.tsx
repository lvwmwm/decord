// Module ID: 11009
// Function ID: 11010
// Name: MODAL_KEY
// Dependencies: [5, 4731, 11010, 2008, 2]

// Module 11009 (MODAL_KEY)
import _modDef4731 from "module_4731" /* 4731 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;

const require = arg1;
const ShopProductPurchaseSuccessModal = "ShopProductPurchaseSuccessModal";
const result = require("set").fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4731.pushLazy(callback(function*() {
      yield v0(closure_1_2[3])(closure_1_2[2], closure_1_2.paths);
      return arg1.default;
    }), closure_0, ShopProductPurchaseSuccessModal);
  },
  close() {
    _modDef4731.popWithKey(ShopProductPurchaseSuccessModal);
  }
};
export const MODAL_KEY = "ShopProductPurchaseSuccessModal";
