// Module ID: 18116
// Function ID: 18117
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4796, 5032, 18117, 1980, 2]
// Exports: default

// Module 18116 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18117, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
