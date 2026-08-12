// Module ID: 11732
// Function ID: 11733
// Dependencies: [4549, 11733, 2007, 2]

// Module 11732
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(11733, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    importDefault(4549).popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
