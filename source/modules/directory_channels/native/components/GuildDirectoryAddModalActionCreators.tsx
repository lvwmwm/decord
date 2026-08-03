// Module ID: 10215
// Function ID: 10216
// Dependencies: [4461, 10216, 1959, 2]

// Module 10215
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4461).pushLazy(require(1959) /* asyncRequireImpl */(10216, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    importDefault(4461).popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
