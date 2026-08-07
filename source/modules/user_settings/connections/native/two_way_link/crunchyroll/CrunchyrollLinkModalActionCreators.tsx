// Module ID: 10502
// Function ID: 10503
// Dependencies: [4507, 10503, 1988, 2]

// Module 10502
let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4507);
    obj = { locationStack };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(10503, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4507).popWithKey(c3);
  }
};
