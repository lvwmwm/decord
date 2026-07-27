// Module ID: 16343
// Function ID: 127208
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: [4099, 16344, 1935, 2]
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 16343 (showGuildSettingsModalStickerInfoActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  let guildId;
  let stickerId;
  ({ guildId, stickerId } = arg0);
  let obj = importDefault(4099);
  obj = {
    guildId,
    stickerId,
    hideActionSheet() {
      outer1_1(outer1_2[0]).hideActionSheet("GuildSettingsModalStickerInfoActionSheet");
    }
  };
  obj.openLazy(require(1935) /* maybeLoadBundle */(16344, dependencyMap.paths), "GuildSettingsModalStickerInfoActionSheet", obj);
};
