// Module ID: 10045
// Function ID: 77545
// Dependencies: [4372, 10046, 1935, 2]

// Module 10045
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(10046, dependencyMap.paths), merged, "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY");
  },
  close() {
    importDefault(4372).popWithKey("GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY");
  }
};
