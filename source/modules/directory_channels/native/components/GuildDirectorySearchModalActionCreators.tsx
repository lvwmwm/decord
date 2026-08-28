// Module ID: 11803
// Function ID: 11804
// Dependencies: [4689, 11804, 2010, 2]

// Module 11803
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;

const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    _modDef4689.pushLazy(asyncRequireImpl(11804, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    _modDef4689.popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
