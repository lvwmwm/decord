// Module ID: 8979
// Function ID: 8980
// Dependencies: [4395, 8980, 1959, 2]

// Module 8979
let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4395);
    obj = { locationStack };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(8980, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4395).popWithKey(c3);
  }
};
