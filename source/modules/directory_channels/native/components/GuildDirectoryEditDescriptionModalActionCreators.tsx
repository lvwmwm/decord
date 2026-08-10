// Module ID: 11686
// Function ID: 11687
// Dependencies: [4509, 11687, 1988, 2]

// Module 11686
let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(11687, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4509).popWithKey(c3);
  }
};
