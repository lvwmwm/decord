// Module ID: 16559
// Function ID: 16560
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: [4253, 16560, 1988, 2]
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 16559 (showGuildSettingsModalStickerInfoActionSheet)
const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  let guildId;
  let stickerId;
  ({ guildId, stickerId } = arg0);
  let obj = importDefault(4253);
  obj = {
    guildId,
    stickerId,
    hideActionSheet() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(require(1988) /* asyncRequireImpl */(16560, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj);
};
