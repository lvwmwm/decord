// Module ID: 15135
// Function ID: 15136
// Name: openEditNoteModal
// Dependencies: [6882, 15136, 2123, 2]
// Exports: default

// Module 15135 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(15136, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
