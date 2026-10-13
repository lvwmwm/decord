// Module ID: 13661
// Function ID: 13662
// Name: openEditNoteModal
// Dependencies: [5934, 13662, 2000, 2]
// Exports: default

// Module 13661 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(13662, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
