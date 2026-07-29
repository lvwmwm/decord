// Module ID: 13812
// Function ID: 13813
// Dependencies: [4395, 13813, 1959, 2]

// Module 13812
const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = importDefault(4395);
    obj = { initialRouteName };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(13813, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    importDefault(4395).popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
