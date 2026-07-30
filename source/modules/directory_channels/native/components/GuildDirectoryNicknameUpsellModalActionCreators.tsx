// Module ID: 11751
// Function ID: 11752
// Dependencies: [4395, 11752, 1959, 2]

// Module 11751
let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(11752, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4395).popWithKey(c3);
  }
};
