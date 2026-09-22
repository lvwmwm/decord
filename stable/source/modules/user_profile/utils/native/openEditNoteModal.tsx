// Module ID: 13190
// Function ID: 13191
// Name: openEditNoteModal
// Dependencies: [4839, 13191, 1896, 2]
// Exports: default

// Module 13190 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13191, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
