// Module ID: 15656
// Function ID: 15657
// Name: openEditNoteModal
// Dependencies: [6785, 15657, 2118, 2]
// Exports: default

// Module 15656 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(15657, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
