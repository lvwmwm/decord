// Module ID: 18909
// Function ID: 18910
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5192, 6651, 18910, 2002, 2]
// Exports: default

// Module 18909 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(18910, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
