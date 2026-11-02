// Module ID: 14910
// Function ID: 14911
// Name: openEditNoteModal
// Dependencies: [6744, 14911, 1994, 2]
// Exports: default

// Module 14910 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14911, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
