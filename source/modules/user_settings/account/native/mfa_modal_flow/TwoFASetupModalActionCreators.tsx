// Module ID: 13956
// Function ID: 13957
// Dependencies: [4507, 13957, 1988, 2]

// Module 13956
const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = importDefault(4507);
    obj = { initialRouteName };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(13957, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    importDefault(4507).popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
