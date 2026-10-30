// Module ID: 14868
// Function ID: 14869
// Name: openEditNoteModal
// Dependencies: [6738, 14869, 1995, 2]
// Exports: default

// Module 14868 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14869, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
