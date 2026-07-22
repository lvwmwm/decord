// Module ID: 11967
// Function ID: 92503
// Name: openEditNoteModal
// Dependencies: []
// Exports: default

// Module 11967 (openEditNoteModal)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(closure_2) {
  let obj = importDefault(dependencyMap[0]);
  obj = { presentation: "modal" };
  obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), closure_2, undefined, obj);
};
