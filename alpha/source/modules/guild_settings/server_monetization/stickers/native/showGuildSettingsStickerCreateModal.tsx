// Module ID: 17637
// Function ID: 17638
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4809, 5048, 17638, 1981, 2]
// Exports: default

// Module 17637 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5048 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17638, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
