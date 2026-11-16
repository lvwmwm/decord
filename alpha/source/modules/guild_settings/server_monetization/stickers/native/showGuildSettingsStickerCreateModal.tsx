// Module ID: 20527
// Function ID: 20528
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5542, 6838, 20528, 2121, 2]
// Exports: default

// Module 20527 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(20528, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
