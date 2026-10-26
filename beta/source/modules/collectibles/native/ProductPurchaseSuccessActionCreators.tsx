// Module ID: 13943
// Function ID: 13944
// Name: ProductPurchaseSuccessActionCreators
// Dependencies: [5, 6672, 13944, 2002, 2]

// Module 13943 (ProductPurchaseSuccessActionCreators)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
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
