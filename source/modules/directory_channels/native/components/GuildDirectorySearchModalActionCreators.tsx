// Module ID: 11672
// Function ID: 11673
// Dependencies: [4509, 11673, 1988, 2]

// Module 11672
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(11673, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    importDefault(4509).popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};
