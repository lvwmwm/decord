// Module ID: 10615
// Function ID: 10616
// Dependencies: [4549, 10616, 2007, 2]

// Module 10615
let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4549);
    obj = { locationStack };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(10616, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4549).popWithKey(c3);
  }
};
