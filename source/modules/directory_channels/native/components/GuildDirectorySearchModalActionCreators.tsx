// Module ID: 10048
// Function ID: 10049
// Dependencies: [4395, 10049, 1959, 2]

// Module 10048
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(10049, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    importDefault(4395).popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
