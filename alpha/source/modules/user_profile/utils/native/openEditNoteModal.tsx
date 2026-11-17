// Module ID: 15809
// Function ID: 15810
// Name: openEditNoteModal
// Dependencies: [6833, 15810, 2121, 2]
// Exports: default

// Module 15809 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(15810, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
