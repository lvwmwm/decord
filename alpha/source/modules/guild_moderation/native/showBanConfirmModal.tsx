// Module ID: 11469
// Function ID: 11470
// Name: showBanConfirmModal
// Dependencies: [4854, 5093, 11470, 1987, 2]
// Exports: default

// Module 11469 (showBanConfirmModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(11470, dependencyMap.paths), merged);
};
