// Module ID: 11747
// Function ID: 11748
// Dependencies: [4572, 11748, 2007, 2]

// Module 11747
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(11748, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    importDefault(4572).popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
