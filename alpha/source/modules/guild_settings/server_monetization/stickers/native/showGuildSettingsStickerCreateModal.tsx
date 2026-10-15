// Module ID: 18653
// Function ID: 18654
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5115, 6150, 18654, 2000, 2]
// Exports: default

// Module 18653 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(18654, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
