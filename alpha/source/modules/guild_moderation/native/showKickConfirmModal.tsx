// Module ID: 12392
// Function ID: 12393
// Name: showKickConfirmModal
// Dependencies: [5127, 6429, 12393, 2119, 2]
// Exports: default

// Module 12392 (showKickConfirmModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(12393, dependencyMap.paths), merged);
};
