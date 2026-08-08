// Module ID: 11679
// Function ID: 11680
// Dependencies: [4509, 11680, 1988, 2]

// Module 11679
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(11680, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    importDefault(4509).popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
