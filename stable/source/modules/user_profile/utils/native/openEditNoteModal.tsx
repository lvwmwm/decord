// Module ID: 12630
// Function ID: 12631
// Name: openEditNoteModal
// Dependencies: [5040, 12631, 1987, 2]
// Exports: default

// Module 12630 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(12631, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
