// Module ID: 8928
// Function ID: 70403
// Dependencies: []

// Module 8928
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(dependencyMap[0]);
    obj = { locationStack };
    obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj, "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY");
  },
  hideModal() {
    importDefault(dependencyMap[0]).popWithKey("USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY");
  }
};
