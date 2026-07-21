// Module ID: 10989
// Function ID: 85519
// Name: showKickConfirmModal
// Dependencies: []
// Exports: default

// Module 10989 (showKickConfirmModal)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_2) {
  importDefault(dependencyMap[0]).hideActionSheet();
  const obj = importDefault(dependencyMap[0]);
  importDefault(dependencyMap[1]).pushLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), closure_2);
};
