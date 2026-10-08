// Module ID: 13043
// Function ID: 13044
// Name: openEditNoteModal
// Dependencies: [5940, 13044, 1999, 2]
// Exports: default

// Module 13043 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(13044, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
