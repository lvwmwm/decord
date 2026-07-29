// Module ID: 10052
// Function ID: 10053
// Dependencies: [4395, 10053, 1959, 2]

// Module 10052
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(10053, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    importDefault(4395).popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
