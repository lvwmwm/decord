// Module ID: 15775
// Function ID: 15776
// Name: openEditNoteModal
// Dependencies: [6848, 15776, 2121, 2]
// Exports: default

// Module 15775 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(15776, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
