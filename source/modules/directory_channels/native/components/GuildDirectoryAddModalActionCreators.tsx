// Module ID: 11680
// Function ID: 11681
// Dependencies: [4509, 11681, 1988, 2]

// Module 11680
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(11681, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    importDefault(4509).popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
