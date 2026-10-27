// Module ID: 19091
// Function ID: 19092
// Name: showGuildSettingsModalStickerInfoActionSheet
// Dependencies: [5210, 19092, 2002, 2]
// Exports: showGuildSettingsModalStickerInfoActionSheet

// Module 19091 (showGuildSettingsModalStickerInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
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
  obj.openLazy(asyncRequire(19092, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj2);
};
