// Module ID: 12017
// Function ID: 12018
// Dependencies: [4509, 12018, 1988, 2]

// Module 12017
let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(12018, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4509).popWithKey(c3);
  }
};
