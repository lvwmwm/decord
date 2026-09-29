// Module ID: 18017
// Function ID: 18018
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4755, 4991, 18018, 1980, 2]
// Exports: default

// Module 18017 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18018, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
