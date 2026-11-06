// Module ID: 14837
// Function ID: 14838
// Name: PlayStationLinkModalActionCreators
// Dependencies: [6824, 14838, 2118, 2]

// Module 14837 (PlayStationLinkModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import size from "module_2" /* 2 */;

const USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
let obj = {
  showModal(locationStack, platformType) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { locationStack, platformType };
    obj.pushLazy(asyncRequire(14838, dependencyMap.paths), obj2, USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default obj;
