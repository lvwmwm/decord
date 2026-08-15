// Module ID: 11035
// Function ID: 11036
// Name: showKickConfirmModal
// Dependencies: [4342, 5260, 11036, 2007, 2]
// Exports: default

// Module 11035 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4342).hideActionSheet();
  const obj = importDefault(4342);
  importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(11036, dependencyMap.paths), closure_0);
};
