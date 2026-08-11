// Module ID: 12021
// Function ID: 12022
// Dependencies: [4509, 12022, 2007, 2]

// Module 12021
let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(12022, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4509).popWithKey(c3);
  }
};
