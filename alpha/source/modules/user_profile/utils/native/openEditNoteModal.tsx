// Module ID: 14966
// Function ID: 14967
// Name: openEditNoteModal
// Dependencies: [6130, 14967, 2120, 2]
// Exports: default

// Module 14966 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14967, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
