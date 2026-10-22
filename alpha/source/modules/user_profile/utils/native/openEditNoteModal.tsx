// Module ID: 14273
// Function ID: 14274
// Name: openEditNoteModal
// Dependencies: [6658, 14274, 2002, 2]
// Exports: default

// Module 14273 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6658 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14274, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
