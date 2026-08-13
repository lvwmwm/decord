// Module ID: 11739
// Function ID: 11740
// Dependencies: [4550, 11740, 2007, 2]

// Module 11739
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(11740, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    importDefault(4550).popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
