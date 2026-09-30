// Module ID: 17602
// Function ID: 17603
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4830, 5069, 17603, 1981, 2]
// Exports: default

// Module 17602 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17603, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
