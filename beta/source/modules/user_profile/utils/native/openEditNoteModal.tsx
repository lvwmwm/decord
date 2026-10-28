// Module ID: 14372
// Function ID: 14373
// Name: openEditNoteModal
// Dependencies: [6704, 14373, 2002, 2]
// Exports: default

// Module 14372 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6704 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14373, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
