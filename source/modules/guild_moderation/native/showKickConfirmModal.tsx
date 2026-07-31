// Module ID: 11060
// Function ID: 11061
// Name: showKickConfirmModal
// Dependencies: [4161, 4399, 11061, 1959, 2]
// Exports: default

// Module 11060 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4161).hideActionSheet();
  const obj = importDefault(4161);
  importDefault(4399).pushLazy(require(1959) /* asyncRequireImpl */(11061, dependencyMap.paths), closure_0);
};
