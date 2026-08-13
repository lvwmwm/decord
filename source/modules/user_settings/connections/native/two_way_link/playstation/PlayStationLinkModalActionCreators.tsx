// Module ID: 10518
// Function ID: 10519
// Dependencies: [4550, 10519, 2007, 2]

// Module 10518
let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(4550);
    obj = { locationStack, platformType };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(10519, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4550).popWithKey(c3);
  }
};
