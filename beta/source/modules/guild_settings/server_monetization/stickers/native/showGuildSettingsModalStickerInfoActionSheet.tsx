// Module ID: 18032
// Function ID: 18033
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: [4757, 18033, 1984, 2]
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 18032 (showGuildSettingsModalStickerInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  ({ guildId, stickerId } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18033, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, {
    guildId,
    stickerId,
    hideActionSheet() {
      ActionSheetActionCreatorsDefault.hideActionSheet(GuildSettingsModalStickerInfoActionSheet);
    }
  });
};
