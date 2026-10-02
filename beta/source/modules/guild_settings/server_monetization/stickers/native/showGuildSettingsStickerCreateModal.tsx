// Module ID: 17380
// Function ID: 17381
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4801, 5040, 17381, 1987, 2]
// Exports: default

// Module 17380 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(17381, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
