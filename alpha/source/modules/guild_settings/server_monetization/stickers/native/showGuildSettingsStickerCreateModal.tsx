// Module ID: 19933
// Function ID: 19934
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5226, 6099, 19934, 2119, 2]
// Exports: default

// Module 19933 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19934, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
