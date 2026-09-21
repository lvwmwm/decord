// Module ID: 11376
// Function ID: 11377
// Name: ProductPurchaseSuccessActionCreators
// Dependencies: [5, 4961, 11377, 1984, 2]

// Module 11376 (ProductPurchaseSuccessActionCreators)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
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
