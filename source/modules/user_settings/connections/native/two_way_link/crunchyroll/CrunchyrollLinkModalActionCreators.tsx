// Module ID: 8983
// Function ID: 8984
// Dependencies: [4395, 8984, 1959, 2]

// Module 8983
let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4395);
    obj = { locationStack };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(8984, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4395).popWithKey(c3);
  }
};
