// Module ID: 11254
// Function ID: 11255
// Name: showKickConfirmModal
// Dependencies: [4271, 4509, 11255, 1988, 2]
// Exports: default

// Module 11254 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4271).hideActionSheet();
  const obj = importDefault(4271);
  importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(11255, dependencyMap.paths), closure_0);
};
