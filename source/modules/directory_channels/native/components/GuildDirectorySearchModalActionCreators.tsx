// Module ID: 11556
// Function ID: 11557
// Dependencies: [4460, 11557, 1959, 2]

// Module 11556
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(11557, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    importDefault(4460).popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
