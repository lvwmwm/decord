// Module ID: 15175
// Function ID: 15176
// Name: openEditNoteModal
// Dependencies: [6831, 15176, 2118, 2]
// Exports: default

// Module 15175 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(15176, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
