// Module ID: 14106
// Function ID: 14107
// Dependencies: [4572, 14107, 2007, 2]

// Module 14106
const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = importDefault(4572);
    obj = { initialRouteName };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(14107, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    importDefault(4572).popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
