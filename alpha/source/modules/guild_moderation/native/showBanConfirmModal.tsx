// Module ID: 12302
// Function ID: 12303
// Name: showBanConfirmModal
// Dependencies: [5131, 6004, 12303, 2119, 2]
// Exports: default

// Module 12302 (showBanConfirmModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(12303, dependencyMap.paths), merged);
};
