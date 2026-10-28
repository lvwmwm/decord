// Module ID: 14328
// Function ID: 14329
// Name: CrunchyrollLinkModalActionCreators
// Dependencies: [6707, 14329, 1999, 2]

// Module 14328 (CrunchyrollLinkModalActionCreators)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

const USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
let obj = {
  showModal(locationStack) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { locationStack };
    obj.pushLazy(asyncRequire(14329, dependencyMap.paths), obj2, USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default obj;
