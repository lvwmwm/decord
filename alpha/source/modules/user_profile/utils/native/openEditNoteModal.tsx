// Module ID: 14787
// Function ID: 14788
// Name: openEditNoteModal
// Dependencies: [6004, 14788, 2119, 2]
// Exports: default

// Module 14787 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14788, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
