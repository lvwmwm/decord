// Module ID: 17749
// Function ID: 17750
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4854, 5093, 17750, 1987, 2]
// Exports: default

// Module 17749 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(17750, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
