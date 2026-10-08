// Module ID: 11464
// Function ID: 11465
// Name: showKickConfirmModal
// Dependencies: [5054, 5940, 11465, 1999, 2]
// Exports: default

// Module 11464 (showKickConfirmModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(11465, dependencyMap.paths), merged);
};
