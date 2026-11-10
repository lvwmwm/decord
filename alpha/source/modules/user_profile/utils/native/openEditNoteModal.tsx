// Module ID: 15171
// Function ID: 15172
// Name: openEditNoteModal
// Dependencies: [6801, 15172, 2118, 2]
// Exports: default

// Module 15171 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(15172, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
