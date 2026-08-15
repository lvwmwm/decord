// Module ID: 11475
// Function ID: 11476
// Dependencies: [5260, 11476, 2007, 2]

// Module 11475
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(11476, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    importDefault(5260).popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
