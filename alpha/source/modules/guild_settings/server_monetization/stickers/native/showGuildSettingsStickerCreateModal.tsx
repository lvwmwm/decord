// Module ID: 20151
// Function ID: 20152
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5374, 6799, 20152, 2118, 2]
// Exports: default

// Module 20151 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(20152, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
