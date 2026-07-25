// Module ID: 8863
// Function ID: 70151
// Dependencies: [4338, 8864, 1935, 2]

// Module 8863
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4338);
    obj = { locationStack };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(8864, dependencyMap.paths), obj, "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY");
  },
  hideModal() {
    importDefault(4338).popWithKey("USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY");
  }
};
