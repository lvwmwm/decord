// Module ID: 10066
// Function ID: 10067
// Dependencies: [4395, 10067, 1959, 2]

// Module 10066
let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(10067, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4395).popWithKey(c3);
  }
};
