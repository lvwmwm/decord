// Module ID: 14959
// Function ID: 14960
// Name: openEditNoteModal
// Dependencies: [6130, 14960, 2120, 2]
// Exports: default

// Module 14959 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14960, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
