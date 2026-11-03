// Module ID: 15041
// Function ID: 15042
// Name: openEditNoteModal
// Dependencies: [6864, 15042, 2123, 2]
// Exports: default

// Module 15041 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(15042, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
