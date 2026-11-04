// Module ID: 15121
// Function ID: 15122
// Name: openEditNoteModal
// Dependencies: [6879, 15122, 2123, 2]
// Exports: default

// Module 15121 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(15122, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
