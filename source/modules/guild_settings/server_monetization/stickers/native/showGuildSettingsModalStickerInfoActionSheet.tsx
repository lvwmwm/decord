// Module ID: 16740
// Function ID: 16741
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: [4312, 16741, 2007, 2]
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 16740 (showGuildSettingsModalStickerInfoActionSheet)
const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  let guildId;
  let stickerId;
  ({ guildId, stickerId } = arg0);
  let obj = importDefault(4312);
  obj = {
    guildId,
    stickerId,
    hideActionSheet() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(require(2007) /* asyncRequireImpl */(16741, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj);
};
