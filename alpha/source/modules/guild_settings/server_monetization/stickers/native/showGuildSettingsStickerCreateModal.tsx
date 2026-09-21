// Module ID: 18012
// Function ID: 18013
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4723, 4959, 18013, 1980, 2]
// Exports: default

// Module 18012 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18013, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
