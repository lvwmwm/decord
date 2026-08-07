// Module ID: 10426
// Function ID: 10427
// Dependencies: [4507, 10427, 1988, 2]

// Module 10426
let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4507);
    obj = { locationStack };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(10427, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4507).popWithKey(c3);
  }
};
