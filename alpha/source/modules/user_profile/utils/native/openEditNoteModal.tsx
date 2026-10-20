// Module ID: 14142
// Function ID: 14143
// Name: openEditNoteModal
// Dependencies: [6620, 14143, 2002, 2]
// Exports: default

// Module 14142 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6620 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14143, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
