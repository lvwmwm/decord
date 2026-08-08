// Module ID: 10568
// Function ID: 10569
// Dependencies: [4509, 10569, 1988, 2]

// Module 10568
let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4509);
    obj = { locationStack };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(10569, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4509).popWithKey(c3);
  }
};
