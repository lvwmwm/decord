// Module ID: 19662
// Function ID: 19663
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [5008, 6310, 19663, 2119, 2]
// Exports: default

// Module 19662 (showGuildSettingsStickerCreateModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19663, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
