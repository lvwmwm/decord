// Module ID: 13747
// Function ID: 105506
// Dependencies: [4338, 13748, 1935, 2]

// Module 13747
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = importDefault(4338);
    obj = { initialRouteName };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(13748, dependencyMap.paths), obj, "TWO_FA_SETUP_MODAL_KEY");
  },
  close() {
    importDefault(4338).popWithKey("TWO_FA_SETUP_MODAL_KEY");
  }
};
