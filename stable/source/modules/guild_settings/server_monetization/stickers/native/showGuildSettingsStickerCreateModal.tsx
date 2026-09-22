// Module ID: 17692
// Function ID: 17693
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4603, 4839, 17693, 1896, 2]
// Exports: default

// Module 17692 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17693, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
