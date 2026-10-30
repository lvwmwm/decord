// Module ID: 19682
// Function ID: 19683
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5253, 6738, 19683, 1995, 2]
// Exports: default

// Module 19682 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19683, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
