// Module ID: 13443
// Function ID: 13444
// Name: openEditNoteModal
// Dependencies: [5032, 13444, 1980, 2]
// Exports: default

// Module 13443 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13444, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
