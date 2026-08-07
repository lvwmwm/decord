// Module ID: 11613
// Function ID: 11614
// Dependencies: [4507, 11614, 1988, 2]

// Module 11613
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(11614, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    importDefault(4507).popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
