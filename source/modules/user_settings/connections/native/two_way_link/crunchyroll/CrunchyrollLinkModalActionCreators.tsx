// Module ID: 8915
// Function ID: 70506
// Dependencies: [4338, 8916, 1935, 2]

// Module 8915
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4338);
    obj = { locationStack };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(8916, dependencyMap.paths), obj, "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY");
  },
  hideModal() {
    importDefault(4338).popWithKey("USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY");
  }
};
