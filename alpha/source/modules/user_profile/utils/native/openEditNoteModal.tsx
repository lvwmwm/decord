// Module ID: 13347
// Function ID: 13348
// Name: openEditNoteModal
// Dependencies: [4959, 13348, 1980, 2]
// Exports: default

// Module 13347 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13348, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
