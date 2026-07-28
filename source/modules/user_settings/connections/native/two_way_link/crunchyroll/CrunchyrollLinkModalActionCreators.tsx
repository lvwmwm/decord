// Module ID: 8959
// Function ID: 70658
// Dependencies: [4372, 8960, 1935, 2]

// Module 8959
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4372);
    obj = { locationStack };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(8960, dependencyMap.paths), obj, "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY");
  },
  hideModal() {
    importDefault(4372).popWithKey("USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY");
  }
};
