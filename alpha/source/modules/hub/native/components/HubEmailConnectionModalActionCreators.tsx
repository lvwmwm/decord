// Module ID: 12427
// Function ID: 12428
// Name: HubEmailConnectionModalActionCreators
// Dependencies: [5, 5099, 12409, 1987, 2]

// Module 12427 (HubEmailConnectionModalActionCreators)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const HUB_EMAIL_CONNECTION_MODAL_KEY = "HUB_EMAIL_CONNECTION_MODAL_KEY";
let obj = {
  open(merged, arg1) {
    let paths;
    let closure_0 = arg1;
    let obj = ModalActionCreatorsDefault;
    obj.pushLazy(_asyncToGenerator(async () => {
      let c3;
      let closure_1;
      let value = tmp;
      await value(c2[3])(c2[2], c2.paths);
      value = arg1.default;
      if (null != closure_129_0) {
        const obj = { animation: closure_129_0 };
        value.modalConfig = obj;
      }
      return value;
    }), merged, HUB_EMAIL_CONNECTION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(HUB_EMAIL_CONNECTION_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModalActionCreators.tsx");

export default obj;
