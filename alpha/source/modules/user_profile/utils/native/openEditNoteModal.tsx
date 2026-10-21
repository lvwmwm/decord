// Module ID: 14235
// Function ID: 14236
// Name: openEditNoteModal
// Dependencies: [6651, 14236, 2002, 2]
// Exports: default

// Module 14235 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14236, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
