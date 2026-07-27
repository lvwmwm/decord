// Module ID: 9999
// Function ID: 77351
// Dependencies: [4338, 10000, 1935, 2]

// Module 9999
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(10000, dependencyMap.paths), merged, "GUILD_DIRECTORY_ADD_MODAL_KEY");
  },
  close() {
    importDefault(4338).popWithKey("GUILD_DIRECTORY_ADD_MODAL_KEY");
  }
};
