// Module ID: 12869
// Function ID: 12870
// Name: PlayStationLinkModalActionCreators
// Dependencies: [5941, 12870, 2000, 2]

// Module 12869 (PlayStationLinkModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import size from "module_2" /* 2 */;

const USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
let obj = {
  showModal(locationStack, platformType) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { locationStack, platformType };
    obj.pushLazy(asyncRequire(12870, dependencyMap.paths), obj2, USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default obj;
