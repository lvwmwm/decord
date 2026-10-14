// Module ID: 18414
// Function ID: 18415
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5060, 5939, 18415, 2000, 2]
// Exports: default

// Module 18414 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(18415, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
