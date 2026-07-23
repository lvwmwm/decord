// Module ID: 11000
// Function ID: 85593
// Name: showKickConfirmModal
// Dependencies: [4098, 4337, 11001, 1934, 2]
// Exports: default

// Module 11000 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(merged) {
  importDefault(4098).hideActionSheet();
  const obj = importDefault(4098);
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(11001, dependencyMap.paths), merged);
};
