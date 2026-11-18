// Module ID: 20530
// Function ID: 20531
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5542, 6838, 20531, 2121, 2]
// Exports: default

// Module 20530 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(20531, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
