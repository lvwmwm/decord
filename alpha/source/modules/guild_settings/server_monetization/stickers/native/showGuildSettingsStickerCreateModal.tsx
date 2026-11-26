// Module ID: 20000
// Function ID: 20001
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5257, 6130, 20001, 2120, 2]
// Exports: default

// Module 20000 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(20001, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
