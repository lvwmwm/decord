// Module ID: 12081
// Function ID: 12082
// Dependencies: [4550, 12082, 2007, 2]

// Module 12081
let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(12082, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4550).popWithKey(c3);
  }
};
