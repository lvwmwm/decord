// Module ID: 13287
// Function ID: 13288
// Name: showBanConfirmModal
// Dependencies: [5258, 6744, 13288, 1994, 2]
// Exports: default

// Module 13287 (showBanConfirmModal)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(13288, dependencyMap.paths), merged);
};
