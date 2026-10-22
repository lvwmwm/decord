// Module ID: 13128
// Function ID: 13129
// Name: GuildDirectoryAddModalActionCreators
// Dependencies: [6657, 13129, 2002, 2]

// Module 13128 (GuildDirectoryAddModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(13129, dependencyMap.paths), merged, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default obj;
