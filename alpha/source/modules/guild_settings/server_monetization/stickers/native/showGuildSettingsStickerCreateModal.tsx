// Module ID: 19788
// Function ID: 19789
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5127, 6429, 19789, 2119, 2]
// Exports: default

// Module 19788 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19789, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
