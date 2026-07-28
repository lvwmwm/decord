// Module ID: 13791
// Function ID: 105679
// Dependencies: [4372, 13792, 1935, 2]

// Module 13791
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = importDefault(4372);
    obj = { initialRouteName };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(13792, dependencyMap.paths), obj, "TWO_FA_SETUP_MODAL_KEY");
  },
  close() {
    importDefault(4372).popWithKey("TWO_FA_SETUP_MODAL_KEY");
  }
};
