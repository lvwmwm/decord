// Module ID: 11176
// Function ID: 11177
// Name: showKickConfirmModal
// Dependencies: [4223, 4461, 11177, 1959, 2]
// Exports: default

// Module 11176 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4223).hideActionSheet();
  const obj = importDefault(4223);
  importDefault(4461).pushLazy(require(1959) /* asyncRequireImpl */(11177, dependencyMap.paths), closure_0);
};
