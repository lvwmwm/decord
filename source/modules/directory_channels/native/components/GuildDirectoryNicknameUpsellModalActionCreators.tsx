// Module ID: 11951
// Function ID: 11952
// Dependencies: [4507, 11952, 1988, 2]

// Module 11951
let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(11952, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4507).popWithKey(c3);
  }
};
