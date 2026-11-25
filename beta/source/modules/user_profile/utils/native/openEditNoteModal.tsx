// Module ID: 14526
// Function ID: 14527
// Name: openEditNoteModal
// Dependencies: [6429, 14527, 2119, 2]
// Exports: default

// Module 14526 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14527, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
