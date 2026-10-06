// Module ID: 12894
// Function ID: 12895
// Name: openEditNoteModal
// Dependencies: [5099, 12895, 1987, 2]
// Exports: default

// Module 12894 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(12895, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
