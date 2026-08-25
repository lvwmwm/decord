// Module ID: 14236
// Function ID: 14237
// Dependencies: [4611, 14237, 2009, 2]

// Module 14236
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = _modDef4611;
    obj = { initialRouteName };
    obj.pushLazy(asyncRequireImpl(14237, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    _modDef4611.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
