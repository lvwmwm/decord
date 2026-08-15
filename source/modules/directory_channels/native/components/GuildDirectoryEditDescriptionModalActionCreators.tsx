// Module ID: 11481
// Function ID: 11482
// Dependencies: [5260, 11482, 2007, 2]

// Module 11481
let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(11482, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(5260).popWithKey(c3);
  }
};
