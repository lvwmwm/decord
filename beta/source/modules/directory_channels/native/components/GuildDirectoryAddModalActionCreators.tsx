// Module ID: 12562
// Function ID: 12563
// Name: GuildDirectoryAddModalActionCreators
// Dependencies: [4959, 12563, 1980, 2]

// Module 12562 (GuildDirectoryAddModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(merged) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12563, dependencyMap.paths), merged, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
