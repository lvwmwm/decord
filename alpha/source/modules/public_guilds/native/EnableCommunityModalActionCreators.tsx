// Module ID: 17811
// Function ID: 17812
// Name: EnableCommunityModalActionCreators
// Dependencies: [5093, 17812, 1987, 2]

// Module 17811 (EnableCommunityModalActionCreators)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import size from "module_2" /* 2 */;

const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
let obj = {
  open() {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(17812, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default obj;
