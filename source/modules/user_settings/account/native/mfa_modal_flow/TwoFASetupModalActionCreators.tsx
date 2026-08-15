// Module ID: 14138
// Function ID: 14139
// Dependencies: [5260, 14139, 2007, 2]

// Module 14138
const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = importDefault(5260);
    obj = { initialRouteName };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(14139, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    importDefault(5260).popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
