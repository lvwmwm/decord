// Module ID: 16156
// Function ID: 124496
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: []
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 16156 (showGuildSettingsModalStickerInfoActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  let guildId;
  let stickerId;
  ({ guildId, stickerId } = arg0);
  let obj = importDefault(dependencyMap[0]);
  obj = {
    guildId,
    stickerId,
    hideActionSheet() {
      callback(closure_2[0]).hideActionSheet("GuildSettingsModalStickerInfoActionSheet");
    }
  };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "GuildSettingsModalStickerInfoActionSheet", obj);
};
