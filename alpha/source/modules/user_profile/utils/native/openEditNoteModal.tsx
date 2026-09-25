// Module ID: 12593
// Function ID: 12594
// Name: openEditNoteModal
// Dependencies: [5032, 12594, 1980, 2]
// Exports: default

// Module 12593 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12594, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
