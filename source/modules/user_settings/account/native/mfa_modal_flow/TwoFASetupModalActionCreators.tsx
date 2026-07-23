// Module ID: 13684
// Function ID: 105050
// Dependencies: [4337, 13685, 1934, 2]

// Module 13684
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = importDefault(4337);
    obj = { initialRouteName };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(13685, dependencyMap.paths), obj, "TWO_FA_SETUP_MODAL_KEY");
  },
  close() {
    importDefault(4337).popWithKey("TWO_FA_SETUP_MODAL_KEY");
  }
};
