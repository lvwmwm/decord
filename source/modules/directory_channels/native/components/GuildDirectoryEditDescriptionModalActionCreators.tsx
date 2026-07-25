// Module ID: 10005
// Function ID: 77415
// Dependencies: [4338, 10006, 1935, 2]

// Module 10005
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(10006, dependencyMap.paths), merged, "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY");
  },
  close() {
    importDefault(4338).popWithKey("GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY");
  }
};
