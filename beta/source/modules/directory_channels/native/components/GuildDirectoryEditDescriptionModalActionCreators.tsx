// Module ID: 11690
// Function ID: 11691
// Name: GuildDirectoryEditDescriptionModalActionCreators
// Dependencies: [5040, 11691, 1987, 2]

// Module 11690 (GuildDirectoryEditDescriptionModalActionCreators)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(11691, dependencyMap.paths), merged, GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default obj;
