// Module ID: 12593
// Function ID: 12594
// Dependencies: [4731, 12594, 2008, 2]

// Module 12593
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4731.pushLazy(asyncRequireImpl(12594, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4731.popWithKey(c3);
  }
};
