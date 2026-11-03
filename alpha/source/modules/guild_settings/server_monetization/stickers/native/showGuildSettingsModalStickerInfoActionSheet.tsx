// Module ID: 19902
// Function ID: 19903
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: [5381, 19903, 2123, 2]
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 19902 (showGuildSettingsModalStickerInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  let guildId;
  let stickerId;
  ({ guildId, stickerId } = arg0);
  let obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    guildId,
    stickerId,
    hideActionSheet() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(GuildSettingsModalStickerInfoActionSheet);
    }
  };
  obj.openLazy(asyncRequire(19903, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj2);
}
