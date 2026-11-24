// Module ID: 7193
// Function ID: 7194
// Name: PlayStationLinkModalActionCreators
// Dependencies: [6429, 7194, 2119, 2]

// Module 7193 (PlayStationLinkModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
let obj = {
  showModal(locationStack, platformType) {
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    let flag = obj.startAtSignIn;
    if (flag === undefined) {
      flag = false;
    }
    const obj2 = ModalActionCreatorsDefault;
    const obj3 = { locationStack, platformType, startAtSignIn: flag };
    obj2.pushLazy(asyncRequire(7194, dependencyMap.paths), obj3, USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default obj;
