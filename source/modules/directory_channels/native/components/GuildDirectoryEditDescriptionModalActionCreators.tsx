// Module ID: 10221
// Function ID: 10222
// Dependencies: [4461, 10222, 1959, 2]

// Module 10221
let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4461).pushLazy(require(1959) /* asyncRequireImpl */(10222, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4461).popWithKey(c3);
  }
};
