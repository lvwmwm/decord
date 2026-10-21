// Module ID: 13068
// Function ID: 13069
// Name: GuildDirectorySearchModalActionCreators
// Dependencies: [6651, 13069, 2002, 2]

// Module 13068 (GuildDirectorySearchModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
let obj = {
  open(channel) {
    channel = channel.channel;
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(13069, dependencyMap.paths), { channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default obj;
