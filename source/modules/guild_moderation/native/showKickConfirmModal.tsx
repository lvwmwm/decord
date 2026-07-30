// Module ID: 11042
// Function ID: 11043
// Name: showKickConfirmModal
// Dependencies: [4157, 4395, 11043, 1959, 2]
// Exports: default

// Module 11042 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4157).hideActionSheet();
  const obj = importDefault(4157);
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(11043, dependencyMap.paths), closure_0);
};
