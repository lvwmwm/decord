// Module ID: 10498
// Function ID: 10499
// Dependencies: [4509, 10499, 2007, 2]

// Module 10498
let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4509);
    obj = { locationStack };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(10499, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4509).popWithKey(c3);
  }
};
