// Module ID: 12080
// Function ID: 12081
// Dependencies: [4550, 12081, 2007, 2]

// Module 12080
let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(12081, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4550).popWithKey(c3);
  }
};
