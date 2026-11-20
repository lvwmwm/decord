// Module ID: 14396
// Function ID: 14397
// Name: openEditNoteModal
// Dependencies: [6310, 14397, 2119, 2]
// Exports: default

// Module 14396 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14397, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
