// Module ID: 11746
// Function ID: 11747
// Dependencies: [4549, 11747, 2007, 2]

// Module 11746
let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(11747, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4549).popWithKey(c3);
  }
};
