// Module ID: 11584
// Function ID: 11585
// Dependencies: [4490, 11585, 1959, 2]

// Module 11584
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(11585, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    importDefault(4490).popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
