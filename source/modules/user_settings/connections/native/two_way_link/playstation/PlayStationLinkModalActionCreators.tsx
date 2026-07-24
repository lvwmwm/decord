// Module ID: 9010
// Function ID: 70972
// Dependencies: [4337, 9011, 1934, 2]

// Module 9010
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(4337);
    obj = { locationStack, platformType };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(9011, dependencyMap.paths), obj, "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY");
  },
  hideModal() {
    importDefault(4337).popWithKey("USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY");
  }
};
