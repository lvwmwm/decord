// Module ID: 18695
// Function ID: 18696
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5118, 6152, 18696, 2002, 2]
// Exports: default

// Module 18695 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(18696, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
