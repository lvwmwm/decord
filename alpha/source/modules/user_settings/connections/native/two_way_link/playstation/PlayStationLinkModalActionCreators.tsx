// Module ID: 13449
// Function ID: 13450
// Name: PlayStationLinkModalActionCreators
// Dependencies: [5939, 13450, 2000, 2]

// Module 13449 (PlayStationLinkModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import size from "module_2" /* 2 */;

const USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
let obj = {
  showModal(locationStack, platformType) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { locationStack, platformType };
    obj.pushLazy(asyncRequire(13450, dependencyMap.paths), obj2, USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default obj;
