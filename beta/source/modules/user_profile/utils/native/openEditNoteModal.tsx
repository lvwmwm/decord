// Module ID: 13376
// Function ID: 13377
// Name: openEditNoteModal
// Dependencies: [4991, 13377, 1980, 2]
// Exports: default

// Module 13376 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13377, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
