// Module ID: 14518
// Function ID: 14519
// Name: openEditNoteModal
// Dependencies: [6429, 14519, 2119, 2]
// Exports: default

// Module 14518 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14519, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
