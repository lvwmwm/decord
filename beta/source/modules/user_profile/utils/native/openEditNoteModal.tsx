// Module ID: 15777
// Function ID: 15778
// Name: openEditNoteModal
// Dependencies: [6838, 15778, 2121, 2]
// Exports: default

// Module 15777 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(15778, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
