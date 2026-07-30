// Module ID: 10056
// Function ID: 10057
// Dependencies: [4395, 10057, 1959, 2]

// Module 10056
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(10057, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    importDefault(4395).popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
