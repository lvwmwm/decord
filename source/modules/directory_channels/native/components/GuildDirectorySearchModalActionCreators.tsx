// Module ID: 10062
// Function ID: 77670
// Dependencies: [4337, 10063, 1934, 2]

// Module 10062
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(10063, dependencyMap.paths), { channel: channel.channel }, "GUILD_DIRECTORY_SEARCH_MODAL_KEY");
  },
  close() {
    importDefault(4337).popWithKey("GUILD_DIRECTORY_SEARCH_MODAL_KEY");
  }
};
