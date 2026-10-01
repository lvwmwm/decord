// Module ID: 10542
// Function ID: 10543
// Name: ProductPurchaseSuccessActionCreators
// Dependencies: [5, 5039, 10543, 1981, 2]

// Module 10542 (ProductPurchaseSuccessActionCreators)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const ShopProductPurchaseSuccessModal = "ShopProductPurchaseSuccessModal";
let obj = {
  open(merged) {
    let paths;
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(_asyncToGenerator(async () => {
      let c0;
      let c1;
      await require("asyncRequire")(paths[2], paths.paths);
      return arg1.default;
    }), merged, ShopProductPurchaseSuccessModal);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ShopProductPurchaseSuccessModal);
  }
};
const result = size.fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx");

export default obj;
export const MODAL_KEY = "ShopProductPurchaseSuccessModal";
