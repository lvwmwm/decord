// Module ID: 11433
// Function ID: 11434
// Name: ProductPurchaseSuccessActionCreators
// Dependencies: [5, 5032, 11434, 1980, 2]

// Module 11433 (ProductPurchaseSuccessActionCreators)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
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
