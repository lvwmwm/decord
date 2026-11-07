// Module ID: 15144
// Function ID: 15145
// Name: openEditNoteModal
// Dependencies: [6799, 15145, 2118, 2]
// Exports: default

// Module 15144 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(15145, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
