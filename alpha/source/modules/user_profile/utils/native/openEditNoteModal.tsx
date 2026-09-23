// Module ID: 13434
// Function ID: 13435
// Name: openEditNoteModal
// Dependencies: [5030, 13435, 1980, 2]
// Exports: default

// Module 13434 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13435, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
