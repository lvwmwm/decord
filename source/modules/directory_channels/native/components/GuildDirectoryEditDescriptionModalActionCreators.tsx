// Module ID: 11744
// Function ID: 11745
// Dependencies: [4550, 11745, 2007, 2]

// Module 11744
let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(11745, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4550).popWithKey(c3);
  }
};
