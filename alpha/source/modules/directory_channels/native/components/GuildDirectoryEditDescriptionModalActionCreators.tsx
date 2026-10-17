// Module ID: 12956
// Function ID: 12957
// Name: GuildDirectoryEditDescriptionModalActionCreators
// Dependencies: [6190, 12957, 2002, 2]

// Module 12956 (GuildDirectoryEditDescriptionModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(12957, dependencyMap.paths), merged, GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default obj;
