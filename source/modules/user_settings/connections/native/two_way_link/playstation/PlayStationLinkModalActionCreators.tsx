// Module ID: 8963
// Function ID: 70703
// Dependencies: []

// Module 8963
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(dependencyMap[0]);
    obj = { locationStack, platformType };
    obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj, "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY");
  },
  hideModal() {
    importDefault(dependencyMap[0]).popWithKey("USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY");
  }
};
