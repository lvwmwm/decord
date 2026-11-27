// Module ID: 20025
// Function ID: 20026
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5257, 6130, 20026, 2120, 2]
// Exports: default

// Module 20025 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(20026, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
