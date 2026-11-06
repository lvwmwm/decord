// Module ID: 15112
// Function ID: 15113
// Name: openEditNoteModal
// Dependencies: [6824, 15113, 2118, 2]
// Exports: default

// Module 15112 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(15113, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
