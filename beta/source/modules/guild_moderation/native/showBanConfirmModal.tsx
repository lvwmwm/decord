// Module ID: 11211
// Function ID: 11212
// Name: showBanConfirmModal
// Dependencies: [4801, 5040, 11212, 1987, 2]
// Exports: default

// Module 11211 (showBanConfirmModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(11212, dependencyMap.paths), merged);
};
