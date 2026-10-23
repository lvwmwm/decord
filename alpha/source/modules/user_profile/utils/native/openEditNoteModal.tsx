// Module ID: 14311
// Function ID: 14312
// Name: openEditNoteModal
// Dependencies: [6670, 14312, 2002, 2]
// Exports: default

// Module 14311 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14312, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
