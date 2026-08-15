// Module ID: 11037
// Function ID: 11038
// Name: showBanConfirmModal
// Dependencies: [4342, 5260, 11038, 2007, 2]
// Exports: default

// Module 11037 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  importDefault(4342).hideActionSheet();
  const obj = importDefault(4342);
  importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(11038, dependencyMap.paths), closure_0);
};
