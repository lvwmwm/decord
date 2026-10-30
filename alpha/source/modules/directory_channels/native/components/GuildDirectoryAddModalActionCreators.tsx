// Module ID: 13806
// Function ID: 13807
// Name: GuildDirectoryAddModalActionCreators
// Dependencies: [6738, 13807, 1995, 2]

// Module 13806 (GuildDirectoryAddModalActionCreators)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(13807, dependencyMap.paths), merged, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default obj;
