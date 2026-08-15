// Module ID: 11834
// Function ID: 11835
// Dependencies: [5260, 11835, 2007, 2]

// Module 11834
let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(11835, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(5260).popWithKey(c3);
  }
};
