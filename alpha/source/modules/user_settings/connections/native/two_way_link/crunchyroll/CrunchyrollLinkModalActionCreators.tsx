// Module ID: 14848
// Function ID: 14849
// Name: CrunchyrollLinkModalActionCreators
// Dependencies: [6824, 14849, 2118, 2]

// Module 14848 (CrunchyrollLinkModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import size from "module_2" /* 2 */;

const USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
let obj = {
  showModal(locationStack) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { locationStack };
    obj.pushLazy(asyncRequire(14849, dependencyMap.paths), obj2, USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default obj;
