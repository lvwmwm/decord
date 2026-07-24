// Module ID: 11720
// Function ID: 90940
// Dependencies: [4337, 11721, 1934, 2]

// Module 11720
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(11721, dependencyMap.paths), merged, "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY");
  },
  close() {
    importDefault(4337).popWithKey("GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY");
  }
};
