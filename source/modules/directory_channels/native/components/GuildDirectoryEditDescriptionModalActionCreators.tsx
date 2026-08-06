// Module ID: 11604
// Function ID: 11605
// Dependencies: [4490, 11605, 1988, 2]

// Module 11604
let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(11605, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4490).popWithKey(c3);
  }
};
