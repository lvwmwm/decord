// Module ID: 10491
// Function ID: 10492
// Dependencies: [4507, 10492, 1988, 2]

// Module 10491
let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(4507);
    obj = { locationStack, platformType };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(10492, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4507).popWithKey(c3);
  }
};
