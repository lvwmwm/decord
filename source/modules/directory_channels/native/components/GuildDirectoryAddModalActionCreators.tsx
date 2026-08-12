// Module ID: 11740
// Function ID: 11741
// Dependencies: [4549, 11741, 2007, 2]

// Module 11740
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(11741, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    importDefault(4549).popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
