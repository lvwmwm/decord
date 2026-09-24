// Module ID: 18026
// Function ID: 18027
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4757, 4993, 18027, 1984, 2]
// Exports: default

// Module 18026 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18027, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
