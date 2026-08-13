// Module ID: 11730
// Function ID: 11731
// Dependencies: [4550, 11731, 2007, 2]

// Module 11730
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(11731, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    importDefault(4550).popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
