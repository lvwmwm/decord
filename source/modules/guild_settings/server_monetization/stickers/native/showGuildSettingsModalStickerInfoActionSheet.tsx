// Module ID: 16273
// Function ID: 126669
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: [4098, 16274, 1934, 2]
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 16273 (showGuildSettingsModalStickerInfoActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  let guildId;
  let stickerId;
  ({ guildId, stickerId } = arg0);
  let obj = importDefault(4098);
  obj = {
    guildId,
    stickerId,
    hideActionSheet() {
      outer1_1(outer1_2[0]).hideActionSheet("GuildSettingsModalStickerInfoActionSheet");
    }
  };
  obj.openLazy(require(1934) /* maybeLoadBundle */(16274, dependencyMap.paths), "GuildSettingsModalStickerInfoActionSheet", obj);
};
