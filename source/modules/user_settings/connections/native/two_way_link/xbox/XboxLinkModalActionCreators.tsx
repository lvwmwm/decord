// Module ID: 8931
// Function ID: 8932
// Dependencies: [4395, 8932, 1959, 2]

// Module 8931
let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4395);
    obj = { locationStack };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(8932, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4395).popWithKey(c3);
  }
};
