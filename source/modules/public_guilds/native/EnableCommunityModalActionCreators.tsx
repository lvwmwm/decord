// Module ID: 17581
// Function ID: 17582
// Dependencies: [4731, 17582, 2008, 2]

// Module 17581
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = set.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    _modDef4731.pushLazy(asyncRequireImpl(17582, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    _modDef4731.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
