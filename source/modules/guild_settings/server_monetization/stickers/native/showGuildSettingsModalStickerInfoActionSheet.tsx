// Module ID: 16411
// Function ID: 16412
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: [4157, 16412, 1959, 2]
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 16411 (showGuildSettingsModalStickerInfoActionSheet)
const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  let guildId;
  let stickerId;
  ({ guildId, stickerId } = arg0);
  let obj = importDefault(4157);
  obj = {
    guildId,
    stickerId,
    hideActionSheet() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(require(1959) /* asyncRequireImpl */(16412, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj);
};
