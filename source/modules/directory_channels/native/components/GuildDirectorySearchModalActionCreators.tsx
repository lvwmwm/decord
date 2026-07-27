// Module ID: 9991
// Function ID: 77290
// Dependencies: [4338, 9992, 1935, 2]

// Module 9991
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(9992, dependencyMap.paths), { channel: channel.channel }, "GUILD_DIRECTORY_SEARCH_MODAL_KEY");
  },
  close() {
    importDefault(4338).popWithKey("GUILD_DIRECTORY_SEARCH_MODAL_KEY");
  }
};
