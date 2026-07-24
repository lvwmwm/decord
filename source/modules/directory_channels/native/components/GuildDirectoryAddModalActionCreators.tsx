// Module ID: 10070
// Function ID: 77731
// Dependencies: [4337, 10071, 1934, 2]

// Module 10070
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(10071, dependencyMap.paths), merged, "GUILD_DIRECTORY_ADD_MODAL_KEY");
  },
  close() {
    importDefault(4337).popWithKey("GUILD_DIRECTORY_ADD_MODAL_KEY");
  }
};
