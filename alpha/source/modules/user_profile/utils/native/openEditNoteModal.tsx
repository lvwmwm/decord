// Module ID: 13995
// Function ID: 13996
// Name: openEditNoteModal
// Dependencies: [6150, 13996, 2000, 2]
// Exports: default

// Module 13995 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(13996, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
