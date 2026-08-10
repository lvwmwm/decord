// Module ID: 11255
// Function ID: 11256
// Name: showKickConfirmModal
// Dependencies: [4271, 4509, 11256, 1988, 2]
// Exports: default

// Module 11255 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4271).hideActionSheet();
  const obj = importDefault(4271);
  importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(11256, dependencyMap.paths), closure_0);
};
