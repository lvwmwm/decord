// Module ID: 11605
// Function ID: 11606
// Dependencies: [4507, 11606, 1988, 2]

// Module 11605
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(11606, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    importDefault(4507).popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
