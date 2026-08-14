// Module ID: 11761
// Function ID: 11762
// Dependencies: [4572, 11762, 2007, 2]

// Module 11761
let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(11762, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4572).popWithKey(c3);
  }
};
