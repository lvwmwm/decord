// Module ID: 18024
// Function ID: 18025
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4724, 4960, 18025, 1980, 2]
// Exports: default

// Module 18024 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18025, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
