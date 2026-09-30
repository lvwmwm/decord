// Module ID: 11539
// Function ID: 11540
// Name: showKickConfirmModal
// Dependencies: [4830, 5069, 11540, 1981, 2]
// Exports: default

// Module 11539 (showKickConfirmModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11540, dependencyMap.paths), merged);
};
