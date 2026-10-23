// Module ID: 19043
// Function ID: 19044
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5208, 6670, 19044, 2002, 2]
// Exports: default

// Module 19043 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19044, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
