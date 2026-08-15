// Module ID: 11467
// Function ID: 11468
// Dependencies: [5260, 11468, 2007, 2]

// Module 11467
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(11468, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    importDefault(5260).popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
