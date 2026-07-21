// Module ID: 13563
// Function ID: 102861
// Dependencies: []

// Module 13563
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = importDefault(dependencyMap[0]);
    obj = { initialRouteName };
    obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj, "TWO_FA_SETUP_MODAL_KEY");
  },
  close() {
    importDefault(dependencyMap[0]).popWithKey("TWO_FA_SETUP_MODAL_KEY");
  }
};
