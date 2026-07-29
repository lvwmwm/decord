// Module ID: 16417
// Function ID: 16418
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: [4157, 16418, 1959, 2]
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 16417 (showGuildSettingsModalStickerInfoActionSheet)
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
  obj.openLazy(require(1959) /* asyncRequireImpl */(16418, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj);
};
