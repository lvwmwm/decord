// Module ID: 18316
// Function ID: 18317
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5056, 5934, 18317, 2000, 2]
// Exports: default

// Module 18316 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(18317, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
