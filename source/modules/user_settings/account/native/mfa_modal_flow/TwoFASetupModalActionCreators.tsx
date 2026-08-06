// Module ID: 13942
// Function ID: 13943
// Dependencies: [4490, 13943, 1988, 2]

// Module 13942
const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = importDefault(4490);
    obj = { initialRouteName };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(13943, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    importDefault(4490).popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
