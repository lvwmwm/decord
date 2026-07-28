// Module ID: 8942
// Function ID: 70603
// Dependencies: [4372, 8943, 1935, 2]

// Module 8942
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(4372);
    obj = { locationStack, platformType };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(8943, dependencyMap.paths), obj, "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY");
  },
  hideModal() {
    importDefault(4372).popWithKey("USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY");
  }
};
