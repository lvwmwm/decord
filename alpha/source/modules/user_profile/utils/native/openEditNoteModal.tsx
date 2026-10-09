// Module ID: 13125
// Function ID: 13126
// Name: openEditNoteModal
// Dependencies: [5941, 13126, 2000, 2]
// Exports: default

// Module 13125 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(13126, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
