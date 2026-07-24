// Module ID: 10076
// Function ID: 77796
// Dependencies: [4337, 10077, 1934, 2]

// Module 10076
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(10077, dependencyMap.paths), merged, "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY");
  },
  close() {
    importDefault(4337).popWithKey("GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY");
  }
};
