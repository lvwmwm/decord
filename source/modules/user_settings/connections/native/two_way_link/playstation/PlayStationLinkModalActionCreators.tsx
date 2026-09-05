// Module ID: 9253
// Function ID: 9254
// Dependencies: [4763, 9254, 1896, 2]

// Module 9253
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = _modDef4763;
    obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl(9254, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4763.popWithKey(c3);
  }
};
