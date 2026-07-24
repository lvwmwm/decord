// Module ID: 9027
// Function ID: 71027
// Dependencies: [4337, 9028, 1934, 2]

// Module 9027
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4337);
    obj = { locationStack };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(9028, dependencyMap.paths), obj, "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY");
  },
  hideModal() {
    importDefault(4337).popWithKey("USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY");
  }
};
