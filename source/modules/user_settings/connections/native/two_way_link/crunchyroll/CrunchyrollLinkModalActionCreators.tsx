// Module ID: 9797
// Function ID: 9798
// Dependencies: [5260, 9798, 2007, 2]

// Module 9797
let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(5260);
    obj = { locationStack };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(9798, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(5260).popWithKey(c3);
  }
};
