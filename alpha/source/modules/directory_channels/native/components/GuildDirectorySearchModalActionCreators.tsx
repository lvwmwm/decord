// Module ID: 12843
// Function ID: 12844
// Name: GuildDirectorySearchModalActionCreators
// Dependencies: [6150, 12844, 2000, 2]

// Module 12843 (GuildDirectorySearchModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
let obj = {
  open(channel) {
    channel = channel.channel;
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(12844, dependencyMap.paths), { channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default obj;
