// Module ID: 19619
// Function ID: 19620
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5247, 6731, 19620, 2000, 2]
// Exports: default

// Module 19619 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19620, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
