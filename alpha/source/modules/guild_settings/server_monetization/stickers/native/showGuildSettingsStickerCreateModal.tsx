// Module ID: 19386
// Function ID: 19387
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5246, 6707, 19387, 1999, 2]
// Exports: default

// Module 19386 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19387, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
