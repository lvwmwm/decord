// Module ID: 11314
// Function ID: 11315
// Name: showKickConfirmModal
// Dependencies: [4312, 4549, 11315, 2007, 2]
// Exports: default

// Module 11314 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4312).hideActionSheet();
  const obj = importDefault(4312);
  importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(11315, dependencyMap.paths), closure_0);
};
