// Module ID: 12482
// Function ID: 12483
// Name: showBanConfirmModal
// Dependencies: [5115, 6150, 12483, 2000, 2]
// Exports: default

// Module 12482 (showBanConfirmModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(12483, dependencyMap.paths), merged);
};
