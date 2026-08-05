// Module ID: 11570
// Function ID: 11571
// Dependencies: [4460, 11571, 1959, 2]

// Module 11570
let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(11571, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4460).popWithKey(c3);
  }
};
