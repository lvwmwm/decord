// Module ID: 11139
// Function ID: 11140
// Name: showKickConfirmModal
// Dependencies: [4223, 4460, 11140, 1959, 2]
// Exports: default

// Module 11139 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4223).hideActionSheet();
  const obj = importDefault(4223);
  importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(11140, dependencyMap.paths), closure_0);
};
