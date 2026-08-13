// Module ID: 11306
// Function ID: 11307
// Name: showKickConfirmModal
// Dependencies: [4310, 4550, 11307, 2007, 2]
// Exports: default

// Module 11306 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4310).hideActionSheet();
  const obj = importDefault(4310);
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(11307, dependencyMap.paths), closure_0);
};
