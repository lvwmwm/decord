// Module ID: 8988
// Function ID: 70812
// Dependencies: [4337, 8989, 1934, 2]

// Module 8988
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4337);
    obj = { locationStack };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(8989, dependencyMap.paths), obj, "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY");
  },
  hideModal() {
    importDefault(4337).popWithKey("USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY");
  }
};
