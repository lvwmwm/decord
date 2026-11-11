// Module ID: 15659
// Function ID: 15660
// Name: openEditNoteModal
// Dependencies: [6785, 15660, 2118, 2]
// Exports: default

// Module 15659 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(15660, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
