// Module ID: 13120
// Function ID: 13121
// Name: GuildDirectorySearchModalActionCreators
// Dependencies: [6657, 13121, 2002, 2]

// Module 13120 (GuildDirectorySearchModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
let obj = {
  open(channel) {
    channel = channel.channel;
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(13121, dependencyMap.paths), { channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default obj;
