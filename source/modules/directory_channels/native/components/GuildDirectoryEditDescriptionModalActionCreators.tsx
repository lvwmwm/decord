// Module ID: 11848
// Function ID: 11849
// Dependencies: [4691, 11849, 2009, 2]

// Module 11848
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4691 from "module_4691" /* 4691 */;

let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4691.pushLazy(asyncRequireImpl(11849, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4691.popWithKey(c3);
  }
};
