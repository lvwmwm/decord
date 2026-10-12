// Module ID: 13179
// Function ID: 13180
// Name: openEditNoteModal
// Dependencies: [5934, 13180, 2000, 2]
// Exports: default

// Module 13179 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(13180, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
