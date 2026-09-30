// Module ID: 12828
// Function ID: 12829
// Name: openEditNoteModal
// Dependencies: [5069, 12829, 1981, 2]
// Exports: default

// Module 12828 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12829, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
