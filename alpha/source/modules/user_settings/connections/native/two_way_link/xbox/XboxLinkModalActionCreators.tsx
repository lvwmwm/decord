// Module ID: 9567
// Function ID: 9568
// Name: XboxLinkModalActionCreators
// Dependencies: [6651, 9568, 2002, 2]

// Module 9567 (XboxLinkModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

const USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
let obj = {
  showModal(locationStack) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { locationStack };
    obj.pushLazy(asyncRequire(9568, dependencyMap.paths), obj2, USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default obj;
