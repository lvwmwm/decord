// Module ID: 9750
// Function ID: 9751
// Dependencies: [5260, 9751, 2007, 2]

// Module 9750
let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(5260);
    obj = { locationStack };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(9751, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(5260).popWithKey(c3);
  }
};
