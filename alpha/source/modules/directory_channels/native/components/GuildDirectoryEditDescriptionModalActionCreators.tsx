// Module ID: 14070
// Function ID: 14071
// Name: GuildDirectoryEditDescriptionModalActionCreators
// Dependencies: [6824, 14071, 2118, 2]

// Module 14070 (GuildDirectoryEditDescriptionModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(14071, dependencyMap.paths), merged, GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default obj;
