// Module ID: 12566
// Function ID: 12567
// Name: GuildDirectoryAddModalActionCreators
// Dependencies: [4960, 12567, 1980, 2]

// Module 12566 (GuildDirectoryAddModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(merged) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12567, dependencyMap.paths), merged, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
