// Module ID: 13905
// Function ID: 13906
// Dependencies: [4460, 13906, 1959, 2]

// Module 13905
const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = importDefault(4460);
    obj = { initialRouteName };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(13906, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    importDefault(4460).popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
