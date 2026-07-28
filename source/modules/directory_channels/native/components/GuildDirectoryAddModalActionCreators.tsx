// Module ID: 10039
// Function ID: 77480
// Dependencies: [4372, 10040, 1935, 2]

// Module 10039
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(10040, dependencyMap.paths), merged, "GUILD_DIRECTORY_ADD_MODAL_KEY");
  },
  close() {
    importDefault(4372).popWithKey("GUILD_DIRECTORY_ADD_MODAL_KEY");
  }
};
