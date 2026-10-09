// Module ID: 18242
// Function ID: 18243
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5055, 5941, 18243, 2000, 2]
// Exports: default

// Module 18242 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(18243, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
