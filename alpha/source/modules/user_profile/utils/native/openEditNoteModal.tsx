// Module ID: 14906
// Function ID: 14907
// Name: openEditNoteModal
// Dependencies: [6744, 14907, 1994, 2]
// Exports: default

// Module 14906 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14907, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
