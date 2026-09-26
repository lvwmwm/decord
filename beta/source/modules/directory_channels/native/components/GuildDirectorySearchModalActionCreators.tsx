// Module ID: 12583
// Function ID: 12584
// Name: GuildDirectorySearchModalActionCreators
// Dependencies: [4991, 12584, 1980, 2]

// Module 12583 (GuildDirectorySearchModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12584, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
