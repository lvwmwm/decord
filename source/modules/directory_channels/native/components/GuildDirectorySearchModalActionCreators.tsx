// Module ID: 10030
// Function ID: 77476
// Dependencies: [4337, 10031, 1934, 2]

// Module 10030
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(10031, dependencyMap.paths), { channel: channel.channel }, "GUILD_DIRECTORY_SEARCH_MODAL_KEY");
  },
  close() {
    importDefault(4337).popWithKey("GUILD_DIRECTORY_SEARCH_MODAL_KEY");
  }
};
