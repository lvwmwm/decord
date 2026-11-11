// Module ID: 14058
// Function ID: 14059
// Name: showBanConfirmModal
// Dependencies: [5489, 6785, 14059, 2118, 2]
// Exports: default

// Module 14058 (showBanConfirmModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(14059, dependencyMap.paths), merged);
};
