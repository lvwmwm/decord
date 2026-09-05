// Module ID: 9217
// Function ID: 9218
// Dependencies: [4763, 9218, 1896, 2]

// Module 9217
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = _modDef4763;
    obj = { locationStack };
    obj.pushLazy(asyncRequireImpl(9218, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4763.popWithKey(c3);
  }
};
