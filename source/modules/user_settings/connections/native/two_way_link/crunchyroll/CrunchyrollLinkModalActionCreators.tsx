// Module ID: 10574
// Function ID: 10575
// Dependencies: [4509, 10575, 2007, 2]

// Module 10574
let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4509);
    obj = { locationStack };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(10575, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4509).popWithKey(c3);
  }
};
