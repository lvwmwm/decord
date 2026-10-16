// Module ID: 12883
// Function ID: 12884
// Name: GuildDirectoryEditDescriptionModalActionCreators
// Dependencies: [6152, 12884, 2002, 2]

// Module 12883 (GuildDirectoryEditDescriptionModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(12884, dependencyMap.paths), merged, GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default obj;
