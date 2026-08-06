// Module ID: 10475
// Function ID: 10476
// Dependencies: [4490, 10476, 1988, 2]

// Module 10475
let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(4490);
    obj = { locationStack, platformType };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(10476, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4490).popWithKey(c3);
  }
};
