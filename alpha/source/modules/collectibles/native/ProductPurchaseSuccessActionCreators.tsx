// Module ID: 11427
// Function ID: 11428
// Name: ProductPurchaseSuccessActionCreators
// Dependencies: [5, 5030, 11428, 1980, 2]

// Module 11427 (ProductPurchaseSuccessActionCreators)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

const require = fn;
const ShopProductPurchaseSuccessModal = "ShopProductPurchaseSuccessModal";
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx");

export default {
  open(merged) {
    ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
      await require("asyncRequireImpl")(paths[2], paths.paths);
      return arg1.default;
    }), merged, ShopProductPurchaseSuccessModal);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(ShopProductPurchaseSuccessModal);
  }
};
export const MODAL_KEY = "ShopProductPurchaseSuccessModal";
