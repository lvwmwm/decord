// Module ID: 17795
// Function ID: 17796
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4860, 5099, 17796, 1987, 2]
// Exports: default

// Module 17795 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(17796, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
