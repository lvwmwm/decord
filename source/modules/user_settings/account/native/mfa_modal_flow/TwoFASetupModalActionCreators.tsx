// Module ID: 14093
// Function ID: 14094
// Dependencies: [4550, 14094, 2007, 2]

// Module 14093
const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = importDefault(4550);
    obj = { initialRouteName };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(14094, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    importDefault(4550).popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
