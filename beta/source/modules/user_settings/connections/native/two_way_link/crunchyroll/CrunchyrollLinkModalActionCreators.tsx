// Module ID: 8571
// Function ID: 8572
// Name: CrunchyrollLinkModalActionCreators
// Dependencies: [5039, 8572, 1981, 2]

// Module 8571 (CrunchyrollLinkModalActionCreators)
import asyncRequire from "asyncRequire" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

const USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
let obj = {
  showModal(locationStack) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { locationStack };
    obj.pushLazy(asyncRequire(8572, dependencyMap.paths), obj2, USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default obj;
