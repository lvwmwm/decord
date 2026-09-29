// Module ID: 12798
// Function ID: 12799
// Name: openEditNoteModal
// Dependencies: [5039, 12799, 1981, 2]
// Exports: default

// Module 12798 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12799, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
