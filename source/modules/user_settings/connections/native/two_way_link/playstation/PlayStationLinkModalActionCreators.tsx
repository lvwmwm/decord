// Module ID: 10563
// Function ID: 10564
// Dependencies: [4509, 10564, 2007, 2]

// Module 10563
let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(4509);
    obj = { locationStack, platformType };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(10564, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4509).popWithKey(c3);
  }
};
