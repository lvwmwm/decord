// Module ID: 9146
// Function ID: 9147
// Dependencies: [4731, 9147, 2008, 2]

// Module 9146
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = _modDef4731;
    obj = { locationStack };
    obj.pushLazy(asyncRequireImpl(9147, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4731.popWithKey(c3);
  }
};
