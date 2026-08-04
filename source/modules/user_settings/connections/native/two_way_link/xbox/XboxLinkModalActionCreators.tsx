// Module ID: 10407
// Function ID: 10408
// Dependencies: [4490, 10408, 1959, 2]

// Module 10407
let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4490);
    obj = { locationStack };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(10408, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4490).popWithKey(c3);
  }
};
