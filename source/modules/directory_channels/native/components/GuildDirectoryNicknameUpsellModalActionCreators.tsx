// Module ID: 12099
// Function ID: 12100
// Dependencies: [4572, 12100, 2007, 2]

// Module 12099
let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(12100, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4572).popWithKey(c3);
  }
};
