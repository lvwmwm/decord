// Module ID: 12024
// Function ID: 12025
// Name: showBanConfirmModal
// Dependencies: [4757, 4993, 12025, 1984, 2]
// Exports: default

// Module 12024 (showBanConfirmModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12025, dependencyMap.paths), merged);
};
