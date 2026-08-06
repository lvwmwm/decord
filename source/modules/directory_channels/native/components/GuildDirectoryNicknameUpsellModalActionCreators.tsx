// Module ID: 11936
// Function ID: 11937
// Dependencies: [4490, 11937, 1988, 2]

// Module 11936
let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(11937, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4490).popWithKey(c3);
  }
};
