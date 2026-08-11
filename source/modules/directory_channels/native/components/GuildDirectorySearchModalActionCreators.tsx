// Module ID: 11675
// Function ID: 11676
// Dependencies: [4509, 11676, 2007, 2]

// Module 11675
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(11676, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    importDefault(4509).popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
