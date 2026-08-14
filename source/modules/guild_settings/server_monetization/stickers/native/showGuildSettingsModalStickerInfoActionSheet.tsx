// Module ID: 16758
// Function ID: 16759
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: [4310, 16759, 2007, 2]
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 16758 (showGuildSettingsModalStickerInfoActionSheet)
const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  let guildId;
  let stickerId;
  ({ guildId, stickerId } = arg0);
  let obj = importDefault(4310);
  obj = {
    guildId,
    stickerId,
    hideActionSheet() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(require(2007) /* asyncRequireImpl */(16759, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj);
};
