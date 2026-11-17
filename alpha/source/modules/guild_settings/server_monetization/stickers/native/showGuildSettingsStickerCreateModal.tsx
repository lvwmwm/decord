// Module ID: 20574
// Function ID: 20575
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5546, 6833, 20575, 2121, 2]
// Exports: default

// Module 20574 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(20575, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
