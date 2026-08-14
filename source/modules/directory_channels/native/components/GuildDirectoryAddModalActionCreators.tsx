// Module ID: 11755
// Function ID: 11756
// Dependencies: [4572, 11756, 2007, 2]

// Module 11755
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(11756, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    importDefault(4572).popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
