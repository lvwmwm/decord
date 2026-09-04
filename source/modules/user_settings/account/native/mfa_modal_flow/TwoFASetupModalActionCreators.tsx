// Module ID: 14706
// Function ID: 14707
// Dependencies: [4731, 14707, 2008, 2]

// Module 14706
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = _modDef4731;
    obj = { initialRouteName };
    obj.pushLazy(asyncRequireImpl(14707, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    _modDef4731.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
