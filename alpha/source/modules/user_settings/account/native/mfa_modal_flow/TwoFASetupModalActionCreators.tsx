// Module ID: 15391
// Function ID: 15392
// Name: TwoFASetupModalActionCreators
// Dependencies: [5939, 15392, 2000, 2]

// Module 15391 (TwoFASetupModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import size from "module_2" /* 2 */;

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
let obj = {
  open(initialRouteName) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { initialRouteName };
    obj.pushLazy(asyncRequire(15392, dependencyMap.paths), obj2, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default obj;
