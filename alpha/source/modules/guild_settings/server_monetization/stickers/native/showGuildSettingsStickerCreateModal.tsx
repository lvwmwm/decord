// Module ID: 20374
// Function ID: 20375
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5489, 6785, 20375, 2118, 2]
// Exports: default

// Module 20374 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(20375, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
