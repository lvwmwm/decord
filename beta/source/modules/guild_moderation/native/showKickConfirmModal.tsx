// Module ID: 12022
// Function ID: 12023
// Name: showKickConfirmModal
// Dependencies: [4757, 4993, 12023, 1984, 2]
// Exports: default

// Module 12022 (showKickConfirmModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12023, dependencyMap.paths), merged);
};
