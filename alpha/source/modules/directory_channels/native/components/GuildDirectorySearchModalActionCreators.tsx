// Module ID: 13798
// Function ID: 13799
// Name: GuildDirectorySearchModalActionCreators
// Dependencies: [6738, 13799, 1995, 2]

// Module 13798 (GuildDirectorySearchModalActionCreators)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
let obj = {
  open(channel) {
    channel = channel.channel;
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(13799, dependencyMap.paths), { channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default obj;
