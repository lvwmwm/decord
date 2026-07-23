// Module ID: 8936
// Function ID: 70457
// Dependencies: [4337, 8937, 1934, 2]

// Module 8936
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4337);
    obj = { locationStack };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(8937, dependencyMap.paths), obj, "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY");
  },
  hideModal() {
    importDefault(4337).popWithKey("USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY");
  }
};
