// Module ID: 14336
// Function ID: 14337
// Dependencies: [4676, 14337, 2009, 2]

// Module 14336
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = _modDef4676;
    obj = { initialRouteName };
    obj.pushLazy(asyncRequireImpl(14337, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    _modDef4676.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
