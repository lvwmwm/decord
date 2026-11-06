// Module ID: 13494
// Function ID: 13495
// Name: showBanConfirmModal
// Dependencies: [5404, 6824, 13495, 2118, 2]
// Exports: default

// Module 13494 (showBanConfirmModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(13495, dependencyMap.paths), merged);
};
