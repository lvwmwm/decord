// Module ID: 11691
// Function ID: 90695
// Dependencies: [4338, 11692, 1935, 2]

// Module 11691
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(11692, dependencyMap.paths), merged, "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY");
  },
  close() {
    importDefault(4338).popWithKey("GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY");
  }
};
