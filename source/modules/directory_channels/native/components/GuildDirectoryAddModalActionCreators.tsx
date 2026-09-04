// Module ID: 12240
// Function ID: 12241
// Dependencies: [4731, 12241, 2008, 2]

// Module 12240
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4731.pushLazy(asyncRequireImpl(12241, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    _modDef4731.popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
