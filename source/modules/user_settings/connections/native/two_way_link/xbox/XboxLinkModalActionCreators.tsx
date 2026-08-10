// Module ID: 10493
// Function ID: 10494
// Dependencies: [4509, 10494, 1988, 2]

// Module 10493
let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4509);
    obj = { locationStack };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(10494, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4509).popWithKey(c3);
  }
};
