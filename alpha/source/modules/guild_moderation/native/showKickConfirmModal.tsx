// Module ID: 12114
// Function ID: 12115
// Name: showKickConfirmModal
// Dependencies: [4724, 4960, 12115, 1980, 2]
// Exports: default

// Module 12114 (showKickConfirmModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12115, dependencyMap.paths), merged);
};
