// Module ID: 20062
// Function ID: 20063
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5384, 6882, 20063, 2123, 2]
// Exports: default

// Module 20062 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(20063, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
