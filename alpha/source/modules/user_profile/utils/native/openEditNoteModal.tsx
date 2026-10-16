// Module ID: 14037
// Function ID: 14038
// Name: openEditNoteModal
// Dependencies: [6153, 14038, 2002, 2]
// Exports: default

// Module 14037 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6153 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14038, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
