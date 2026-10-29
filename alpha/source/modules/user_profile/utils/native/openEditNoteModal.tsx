// Module ID: 14833
// Function ID: 14834
// Name: openEditNoteModal
// Dependencies: [6731, 14834, 2000, 2]
// Exports: default

// Module 14833 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14834, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
