// Module ID: 16804
// Function ID: 16805
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: [4342, 16805, 2007, 2]
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 16804 (showGuildSettingsModalStickerInfoActionSheet)
const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  let guildId;
  let stickerId;
  ({ guildId, stickerId } = arg0);
  let obj = importDefault(4342);
  obj = {
    guildId,
    stickerId,
    hideActionSheet() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(require(2007) /* asyncRequireImpl */(16805, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj);
};
