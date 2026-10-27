// Module ID: 15800
// Function ID: 15801
// Name: TwoFASetupModalActionCreators
// Dependencies: [6190, 15801, 2002, 2]

// Module 15800 (TwoFASetupModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
let obj = {
  open(initialRouteName) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { initialRouteName };
    obj.pushLazy(asyncRequire(15801, dependencyMap.paths), obj2, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default obj;
