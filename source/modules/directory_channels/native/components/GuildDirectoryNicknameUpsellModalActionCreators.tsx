// Module ID: 11755
// Function ID: 11756
// Dependencies: [4395, 11756, 1959, 2]

// Module 11755
let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(11756, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4395).popWithKey(c3);
  }
};
