// Module ID: 11738
// Function ID: 11739
// Dependencies: [4550, 11739, 2007, 2]

// Module 11738
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(11739, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    importDefault(4550).popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
