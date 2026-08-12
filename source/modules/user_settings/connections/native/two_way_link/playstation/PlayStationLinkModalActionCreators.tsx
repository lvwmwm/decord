// Module ID: 10604
// Function ID: 10605
// Dependencies: [4549, 10605, 2007, 2]

// Module 10604
let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(4549);
    obj = { locationStack, platformType };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(10605, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4549).popWithKey(c3);
  }
};
