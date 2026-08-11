// Module ID: 11683
// Function ID: 11684
// Dependencies: [4509, 11684, 2007, 2]

// Module 11683
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(11684, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    importDefault(4509).popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
