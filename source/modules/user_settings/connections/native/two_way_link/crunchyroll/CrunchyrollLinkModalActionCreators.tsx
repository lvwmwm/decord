// Module ID: 8992
// Function ID: 8993
// Dependencies: [4399, 8993, 1959, 2]

// Module 8992
let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4399);
    obj = { locationStack };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(8993, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4399).popWithKey(c3);
  }
};
