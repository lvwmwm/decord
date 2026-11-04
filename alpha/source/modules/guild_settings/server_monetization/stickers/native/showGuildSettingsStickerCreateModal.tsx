// Module ID: 20026
// Function ID: 20027
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5382, 6879, 20027, 2123, 2]
// Exports: default

// Module 20026 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(20027, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
