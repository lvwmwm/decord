// Module ID: 13184
// Function ID: 13185
// Name: openEditNoteModal
// Dependencies: [5934, 13185, 2000, 2]
// Exports: default

// Module 13184 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(13185, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
