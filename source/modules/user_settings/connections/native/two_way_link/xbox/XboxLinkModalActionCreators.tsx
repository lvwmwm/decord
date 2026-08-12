// Module ID: 10539
// Function ID: 10540
// Dependencies: [4549, 10540, 2007, 2]

// Module 10539
let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4549);
    obj = { locationStack };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(10540, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4549).popWithKey(c3);
  }
};
