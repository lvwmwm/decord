// Module ID: 12396
// Function ID: 12397
// Name: showBanConfirmModal
// Dependencies: [5127, 6429, 12397, 2119, 2]
// Exports: default

// Module 12396 (showBanConfirmModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(12397, dependencyMap.paths), merged);
};
