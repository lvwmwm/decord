// Module ID: 11590
// Function ID: 11591
// Dependencies: [4490, 11591, 1988, 2]

// Module 11590
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(11591, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    importDefault(4490).popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
