// Module ID: 19123
// Function ID: 19124
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5211, 6673, 19124, 1999, 2]
// Exports: default

// Module 19123 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19124, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
