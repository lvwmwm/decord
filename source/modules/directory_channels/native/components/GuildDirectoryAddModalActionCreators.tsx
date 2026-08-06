// Module ID: 11598
// Function ID: 11599
// Dependencies: [4490, 11599, 1988, 2]

// Module 11598
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(11599, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    importDefault(4490).popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
