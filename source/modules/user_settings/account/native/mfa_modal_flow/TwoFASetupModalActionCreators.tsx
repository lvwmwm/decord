// Module ID: 14320
// Function ID: 14321
// Dependencies: [4689, 14321, 2010, 2]

// Module 14320
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = _modDef4689;
    obj = { initialRouteName };
    obj.pushLazy(asyncRequireImpl(14321, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    _modDef4689.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
