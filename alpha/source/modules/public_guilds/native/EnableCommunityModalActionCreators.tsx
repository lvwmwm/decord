// Module ID: 18330
// Function ID: 18331
// Name: EnableCommunityModalActionCreators
// Dependencies: [5941, 18331, 2000, 2]

// Module 18330 (EnableCommunityModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import size from "module_2" /* 2 */;

const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
let obj = {
  open() {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(18331, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default obj;
