// Module ID: 17004
// Function ID: 17005
// Name: TwoFASetupModalActionCreators
// Dependencies: [6831, 17005, 2118, 2]

// Module 17004 (TwoFASetupModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
let obj = {
  open(initialRouteName) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { initialRouteName };
    obj.pushLazy(asyncRequire(17005, dependencyMap.paths), obj2, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default obj;
