// Module ID: 15145
// Function ID: 15146
// Name: openEditNoteModal
// Dependencies: [6799, 15146, 2118, 2]
// Exports: default

// Module 15145 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(15146, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
