// Module ID: 18832
// Function ID: 18833
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5171, 6623, 18833, 2002, 2]
// Exports: default

// Module 18832 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(18833, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
