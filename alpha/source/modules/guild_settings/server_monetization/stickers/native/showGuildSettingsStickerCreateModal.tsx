// Module ID: 18999
// Function ID: 19000
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5196, 6657, 19000, 2002, 2]
// Exports: default

// Module 18999 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19000, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
