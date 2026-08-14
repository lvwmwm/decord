// Module ID: 10547
// Function ID: 10548
// Dependencies: [4572, 10548, 2007, 2]

// Module 10547
let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4572);
    obj = { locationStack };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(10548, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4572).popWithKey(c3);
  }
};
