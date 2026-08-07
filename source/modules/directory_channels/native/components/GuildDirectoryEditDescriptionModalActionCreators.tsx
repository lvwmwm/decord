// Module ID: 11619
// Function ID: 11620
// Dependencies: [4507, 11620, 1988, 2]

// Module 11619
let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(11620, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4507).popWithKey(c3);
  }
};
