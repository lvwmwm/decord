// Module ID: 8966
// Function ID: 8967
// Dependencies: [4395, 8967, 1959, 2]

// Module 8966
let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(4395);
    obj = { locationStack, platformType };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(8967, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4395).popWithKey(c3);
  }
};
