// Module ID: 8907
// Function ID: 70303
// Dependencies: [4372, 8908, 1935, 2]

// Module 8907
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4372);
    obj = { locationStack };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(8908, dependencyMap.paths), obj, "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY");
  },
  hideModal() {
    importDefault(4372).popWithKey("USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY");
  }
};
