// Module ID: 9182
// Function ID: 9183
// Dependencies: [4731, 9183, 2008, 2]

// Module 9182
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = _modDef4731;
    obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl(9183, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4731.popWithKey(c3);
  }
};
