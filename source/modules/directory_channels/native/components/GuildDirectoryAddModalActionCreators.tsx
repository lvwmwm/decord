// Module ID: 10038
// Function ID: 77537
// Dependencies: [4337, 10039, 1934, 2]

// Module 10038
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(10039, dependencyMap.paths), merged, "GUILD_DIRECTORY_ADD_MODAL_KEY");
  },
  close() {
    importDefault(4337).popWithKey("GUILD_DIRECTORY_ADD_MODAL_KEY");
  }
};
