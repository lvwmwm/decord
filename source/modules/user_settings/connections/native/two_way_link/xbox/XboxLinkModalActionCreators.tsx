// Module ID: 10453
// Function ID: 10454
// Dependencies: [4550, 10454, 2007, 2]

// Module 10453
let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4550);
    obj = { locationStack };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(10454, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4550).popWithKey(c3);
  }
};
