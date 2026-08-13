// Module ID: 10531
// Function ID: 10532
// Dependencies: [4550, 10532, 2007, 2]

// Module 10531
let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4550);
    obj = { locationStack };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(10532, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4550).popWithKey(c3);
  }
};
