// Module ID: 13665
// Function ID: 13666
// Name: GuildDirectoryEditDescriptionModalActionCreators
// Dependencies: [6731, 13666, 2000, 2]

// Module 13665 (GuildDirectoryEditDescriptionModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(13666, dependencyMap.paths), merged, GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default obj;
