// Module ID: 14102
// Function ID: 14103
// Dependencies: [4550, 14103, 2007, 2]

// Module 14102
const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = importDefault(4550);
    obj = { initialRouteName };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(14103, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    importDefault(4550).popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
