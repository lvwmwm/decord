// Module ID: 20192
// Function ID: 20193
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5406, 6831, 20193, 2118, 2]
// Exports: default

// Module 20192 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(20193, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
