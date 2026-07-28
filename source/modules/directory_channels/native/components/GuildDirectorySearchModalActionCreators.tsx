// Module ID: 10031
// Function ID: 77419
// Dependencies: [4372, 10032, 1935, 2]

// Module 10031
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(10032, dependencyMap.paths), { channel: channel.channel }, "GUILD_DIRECTORY_SEARCH_MODAL_KEY");
  },
  close() {
    importDefault(4372).popWithKey("GUILD_DIRECTORY_SEARCH_MODAL_KEY");
  }
};
