// Module ID: 19896
// Function ID: 19897
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5381, 6864, 19897, 2123, 2]
// Exports: default

// Module 19896 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19897, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
