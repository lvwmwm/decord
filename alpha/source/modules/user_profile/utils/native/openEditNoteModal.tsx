// Module ID: 13699
// Function ID: 13700
// Name: openEditNoteModal
// Dependencies: [5939, 13700, 2000, 2]
// Exports: default

// Module 13699 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(13700, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
