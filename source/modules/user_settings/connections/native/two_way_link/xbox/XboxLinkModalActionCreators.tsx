// Module ID: 10471
// Function ID: 10472
// Dependencies: [4572, 10472, 2007, 2]

// Module 10471
let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4572);
    obj = { locationStack };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(10472, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4572).popWithKey(c3);
  }
};
