// Module ID: 8898
// Function ID: 70451
// Dependencies: [4338, 8899, 1935, 2]

// Module 8898
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(4338);
    obj = { locationStack, platformType };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(8899, dependencyMap.paths), obj, "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY");
  },
  hideModal() {
    importDefault(4338).popWithKey("USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY");
  }
};
