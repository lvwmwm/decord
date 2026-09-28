// Module ID: 17378
// Function ID: 17379
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4800, 5039, 17379, 1981, 2]
// Exports: default

// Module 17378 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17379, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
