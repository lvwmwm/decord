// Module ID: 14027
// Function ID: 14028
// Name: openEditNoteModal
// Dependencies: [6152, 14028, 2002, 2]
// Exports: default

// Module 14027 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14028, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
