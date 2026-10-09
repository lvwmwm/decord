// Module ID: 11952
// Function ID: 11953
// Name: GuildDirectorySearchModalActionCreators
// Dependencies: [5941, 11953, 2000, 2]

// Module 11952 (GuildDirectorySearchModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
let obj = {
  open(channel) {
    channel = channel.channel;
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(11953, dependencyMap.paths), { channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default obj;
