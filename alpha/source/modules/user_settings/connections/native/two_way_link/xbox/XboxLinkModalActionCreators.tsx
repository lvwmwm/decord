// Module ID: 7360
// Function ID: 7361
// Name: XboxLinkModalActionCreators
// Dependencies: [6785, 7361, 2118, 2]

// Module 7360 (XboxLinkModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
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
    obj2.pushLazy(asyncRequire(7361, dependencyMap.paths), obj3, USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default obj;
