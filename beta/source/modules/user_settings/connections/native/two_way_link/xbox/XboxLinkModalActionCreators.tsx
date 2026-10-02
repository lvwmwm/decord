// Module ID: 8526
// Function ID: 8527
// Name: XboxLinkModalActionCreators
// Dependencies: [5040, 8527, 1987, 2]

// Module 8526 (XboxLinkModalActionCreators)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

const USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
let obj = {
  showModal(locationStack) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { locationStack };
    obj.pushLazy(asyncRequire(8527, dependencyMap.paths), obj2, USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default obj;
