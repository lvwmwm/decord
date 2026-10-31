// Module ID: 19739
// Function ID: 19740
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5258, 6744, 19740, 1994, 2]
// Exports: default

// Module 19739 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19740, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
