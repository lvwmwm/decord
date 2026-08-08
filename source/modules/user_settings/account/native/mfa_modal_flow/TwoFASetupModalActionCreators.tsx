// Module ID: 14026
// Function ID: 14027
// Dependencies: [4509, 14027, 1988, 2]

// Module 14026
const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = importDefault(4509);
    obj = { initialRouteName };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(14027, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    importDefault(4509).popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
