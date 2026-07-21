// Module ID: 10991
// Function ID: 85535
// Name: showBanConfirmModal
// Dependencies: []
// Exports: default

// Module 10991 (showBanConfirmModal)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_2) {
  importDefault(dependencyMap[0]).hideActionSheet();
  const obj = importDefault(dependencyMap[0]);
  importDefault(dependencyMap[1]).pushLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), closure_2);
};
