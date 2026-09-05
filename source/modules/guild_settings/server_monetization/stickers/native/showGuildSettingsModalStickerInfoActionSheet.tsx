// Module ID: 17583
// Function ID: 17584
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: [4527, 17584, 1896, 2]
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 17583 (showGuildSettingsModalStickerInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = set.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  ({ guildId, stickerId } = arg0);
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    guildId,
    stickerId,
    hideActionSheet() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(asyncRequireImpl(17584, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj);
};
