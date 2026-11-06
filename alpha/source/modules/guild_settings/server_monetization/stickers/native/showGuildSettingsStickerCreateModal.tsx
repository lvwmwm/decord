// Module ID: 20069
// Function ID: 20070
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5404, 6824, 20070, 2118, 2]
// Exports: default

// Module 20069 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(20070, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
