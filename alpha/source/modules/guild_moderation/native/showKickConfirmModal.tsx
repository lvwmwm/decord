// Module ID: 12209
// Function ID: 12210
// Name: showKickConfirmModal
// Dependencies: [5056, 5934, 12210, 2000, 2]
// Exports: default

// Module 12209 (showKickConfirmModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(12210, dependencyMap.paths), merged);
};
