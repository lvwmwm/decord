// Module ID: 14028
// Function ID: 14029
// Dependencies: [4509, 14029, 1988, 2]

// Module 14028
const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = importDefault(4509);
    obj = { initialRouteName };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(14029, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    importDefault(4509).popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
