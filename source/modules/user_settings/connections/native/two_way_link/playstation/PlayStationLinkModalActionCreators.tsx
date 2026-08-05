// Module ID: 10444
// Function ID: 10445
// Dependencies: [4460, 10445, 1959, 2]

// Module 10444
let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(4460);
    obj = { locationStack, platformType };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(10445, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4460).popWithKey(c3);
  }
};
