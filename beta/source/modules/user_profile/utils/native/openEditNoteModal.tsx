// Module ID: 13386
// Function ID: 13387
// Name: openEditNoteModal
// Dependencies: [4993, 13387, 1984, 2]
// Exports: default

// Module 13386 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13387, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
