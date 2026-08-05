// Module ID: 10379
// Function ID: 10380
// Dependencies: [4460, 10380, 1959, 2]

// Module 10379
let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4460);
    obj = { locationStack };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(10380, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4460).popWithKey(c3);
  }
};
