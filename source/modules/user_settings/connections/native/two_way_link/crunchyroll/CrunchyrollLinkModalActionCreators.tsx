// Module ID: 10486
// Function ID: 10487
// Dependencies: [4490, 10487, 1988, 2]

// Module 10486
let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4490);
    obj = { locationStack };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(10487, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4490).popWithKey(c3);
  }
};
