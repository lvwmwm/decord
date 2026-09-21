// Module ID: 13350
// Function ID: 13351
// Name: openEditNoteModal
// Dependencies: [4961, 13351, 1984, 2]
// Exports: default

// Module 13350 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13351, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
