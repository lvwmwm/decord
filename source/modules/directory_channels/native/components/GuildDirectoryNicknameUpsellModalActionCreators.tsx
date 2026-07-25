// Module ID: 11690
// Function ID: 90690
// Dependencies: [4338, 11691, 1935, 2]

// Module 11690
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(11691, dependencyMap.paths), merged, "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY");
  },
  close() {
    importDefault(4338).popWithKey("GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY");
  }
};
