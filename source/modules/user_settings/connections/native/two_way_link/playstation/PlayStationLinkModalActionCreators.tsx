// Module ID: 8971
// Function ID: 70757
// Dependencies: [4337, 8972, 1934, 2]

// Module 8971
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(4337);
    obj = { locationStack, platformType };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(8972, dependencyMap.paths), obj, "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY");
  },
  hideModal() {
    importDefault(4337).popWithKey("USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY");
  }
};
