// Module ID: 19752
// Function ID: 19753
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: [5258, 19753, 1994, 2]
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 19752 (showGuildSettingsModalStickerInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
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
  obj.openLazy(asyncRequire(19753, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj2);
}
