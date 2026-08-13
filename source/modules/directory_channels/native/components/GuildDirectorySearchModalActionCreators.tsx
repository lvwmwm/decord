// Module ID: 11731
// Function ID: 11732
// Dependencies: [4550, 11732, 2007, 2]

// Module 11731
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(11732, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    importDefault(4550).popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
