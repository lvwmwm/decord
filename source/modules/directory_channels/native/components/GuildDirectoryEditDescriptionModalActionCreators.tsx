// Module ID: 11689
// Function ID: 11690
// Dependencies: [4509, 11690, 2007, 2]

// Module 11689
let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(11690, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4509).popWithKey(c3);
  }
};
