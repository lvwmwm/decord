// Module ID: 12875
// Function ID: 12876
// Name: openEditNoteModal
// Dependencies: [5093, 12876, 1987, 2]
// Exports: default

// Module 12875 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(12876, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
