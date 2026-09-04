// Module ID: 12246
// Function ID: 12247
// Dependencies: [4731, 12247, 2008, 2]

// Module 12246
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4731.pushLazy(asyncRequireImpl(12247, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4731.popWithKey(c3);
  }
};
