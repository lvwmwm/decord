// Module ID: 12628
// Function ID: 12629
// Name: openEditNoteModal
// Dependencies: [5039, 12629, 1981, 2]
// Exports: default

// Module 12628 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12629, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
