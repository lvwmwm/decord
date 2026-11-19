// Module ID: 6907
// Function ID: 6908
// Name: XboxLinkModalActionCreators
// Dependencies: [6308, 6908, 2121, 2]

// Module 6907 (XboxLinkModalActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import size from "module_2" /* 2 */;

const USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
let obj = {
  showModal(locationStack) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let flag = obj.startAtSignIn;
    if (flag === undefined) {
      flag = false;
    }
    const obj2 = ModalActionCreatorsDefault;
    const obj3 = { locationStack, startAtSignIn: flag };
    obj2.pushLazy(asyncRequire(6908, dependencyMap.paths), obj3, USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default obj;
