// Module ID: 11693
// Function ID: 90702
// Dependencies: [4337, 11694, 1934, 2]

// Module 11693
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(11694, dependencyMap.paths), merged, "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY");
  },
  close() {
    importDefault(4337).popWithKey("GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY");
  }
};
