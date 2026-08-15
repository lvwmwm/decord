// Module ID: 9780
// Function ID: 9781
// Dependencies: [5260, 9781, 2007, 2]

// Module 9780
let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(5260);
    obj = { locationStack, platformType };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(9781, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(5260).popWithKey(c3);
  }
};
