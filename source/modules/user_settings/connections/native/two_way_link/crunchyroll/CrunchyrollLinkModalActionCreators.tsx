// Module ID: 10455
// Function ID: 10456
// Dependencies: [4460, 10456, 1959, 2]

// Module 10455
let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4460);
    obj = { locationStack };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(10456, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4460).popWithKey(c3);
  }
};
