// Module ID: 12166
// Function ID: 12167
// Dependencies: [4691, 12167, 2009, 2]

// Module 12166
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4691 from "module_4691" /* 4691 */;

let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4691.pushLazy(asyncRequireImpl(12167, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4691.popWithKey(c3);
  }
};
