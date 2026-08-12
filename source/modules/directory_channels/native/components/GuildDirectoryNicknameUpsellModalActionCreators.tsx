// Module ID: 12078
// Function ID: 12079
// Dependencies: [4549, 12079, 2007, 2]

// Module 12078
let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(12079, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4549).popWithKey(c3);
  }
};
