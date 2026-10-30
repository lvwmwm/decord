// Module ID: 16601
// Function ID: 16602
// Name: TwoFASetupModalActionCreators
// Dependencies: [6738, 16602, 1995, 2]

// Module 16601 (TwoFASetupModalActionCreators)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
let obj = {
  open(initialRouteName) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { initialRouteName };
    obj.pushLazy(asyncRequire(16602, dependencyMap.paths), obj2, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default obj;
