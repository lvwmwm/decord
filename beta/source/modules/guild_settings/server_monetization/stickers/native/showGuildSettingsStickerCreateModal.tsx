// Module ID: 18016
// Function ID: 18017
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4725, 4961, 18017, 1984, 2]
// Exports: default

// Module 18016 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18017, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
