// Module ID: 18082
// Function ID: 18083
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5054, 5940, 18083, 1999, 2]
// Exports: default

// Module 18082 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(18083, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
