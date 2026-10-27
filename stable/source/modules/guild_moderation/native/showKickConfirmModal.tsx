// Module ID: 12586
// Function ID: 12587
// Name: showKickConfirmModal
// Dependencies: [5155, 6190, 12587, 2002, 2]
// Exports: default

// Module 12586 (showKickConfirmModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(12587, dependencyMap.paths), merged);
};
