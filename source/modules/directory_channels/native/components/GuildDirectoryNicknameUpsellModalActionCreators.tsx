// Module ID: 11730
// Function ID: 90846
// Dependencies: [4372, 11731, 1935, 2]

// Module 11730
const result = require("maybeLoadBundle").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(11731, dependencyMap.paths), merged, "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY");
  },
  close() {
    importDefault(4372).popWithKey("GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY");
  }
};
