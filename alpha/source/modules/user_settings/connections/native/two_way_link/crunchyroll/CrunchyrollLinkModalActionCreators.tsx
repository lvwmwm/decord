// Module ID: 13865
// Function ID: 13866
// Name: CrunchyrollLinkModalActionCreators
// Dependencies: [6190, 13866, 2002, 2]

// Module 13865 (CrunchyrollLinkModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
let obj = {
  showModal(locationStack) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { locationStack };
    obj.pushLazy(asyncRequire(13866, dependencyMap.paths), obj2, USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default obj;
