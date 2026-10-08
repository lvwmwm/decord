// Module ID: 9111
// Function ID: 9112
// Name: XboxLinkModalActionCreators
// Dependencies: [5940, 9112, 1999, 2]

// Module 9111 (XboxLinkModalActionCreators)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
let obj = {
  showModal(locationStack) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { locationStack };
    obj.pushLazy(asyncRequire(9112, dependencyMap.paths), obj2, USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default obj;
