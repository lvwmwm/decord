// Module ID: 11902
// Function ID: 11903
// Dependencies: [4460, 11903, 1959, 2]

// Module 11902
let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(11903, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4460).popWithKey(c3);
  }
};
