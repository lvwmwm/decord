// Module ID: 19844
// Function ID: 19845
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5006, 6308, 19845, 2121, 2]
// Exports: default

// Module 19844 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19845, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
