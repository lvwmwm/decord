// Module ID: 11592
// Function ID: 11593
// Dependencies: [4490, 11593, 1959, 2]

// Module 11592
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(11593, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    importDefault(4490).popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
