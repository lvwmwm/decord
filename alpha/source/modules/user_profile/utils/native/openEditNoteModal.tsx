// Module ID: 14909
// Function ID: 14910
// Name: openEditNoteModal
// Dependencies: [6099, 14910, 2119, 2]
// Exports: default

// Module 14909 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14910, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
