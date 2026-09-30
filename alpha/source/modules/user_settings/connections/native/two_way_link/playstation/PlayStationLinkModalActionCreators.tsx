// Module ID: 8759
// Function ID: 8760
// Name: PlayStationLinkModalActionCreators
// Dependencies: [5069, 8760, 1981, 2]

// Module 8759 (PlayStationLinkModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8760, dependencyMap.paths), { locationStack, platformType }, c3);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(c3);
  }
};
