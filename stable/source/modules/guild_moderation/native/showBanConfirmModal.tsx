// Module ID: 12588
// Function ID: 12589
// Name: showBanConfirmModal
// Dependencies: [5155, 6190, 12589, 2002, 2]
// Exports: default

// Module 12588 (showBanConfirmModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(12589, dependencyMap.paths), merged);
};
