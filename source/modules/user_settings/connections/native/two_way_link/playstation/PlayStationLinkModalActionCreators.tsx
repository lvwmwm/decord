// Module ID: 10536
// Function ID: 10537
// Dependencies: [4572, 10537, 2007, 2]

// Module 10536
let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(4572);
    obj = { locationStack, platformType };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(10537, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4572).popWithKey(c3);
  }
};
