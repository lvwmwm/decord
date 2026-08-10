// Module ID: 16670
// Function ID: 16671
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: [4271, 16671, 1988, 2]
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 16670 (showGuildSettingsModalStickerInfoActionSheet)
const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  let guildId;
  let stickerId;
  ({ guildId, stickerId } = arg0);
  let obj = importDefault(4271);
  obj = {
    guildId,
    stickerId,
    hideActionSheet() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(require(1988) /* asyncRequireImpl */(16671, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj);
};
