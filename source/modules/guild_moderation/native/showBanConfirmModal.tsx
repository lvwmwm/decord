// Module ID: 11190
// Function ID: 11191
// Name: showBanConfirmModal
// Dependencies: [4270, 4507, 11191, 1988, 2]
// Exports: default

// Module 11190 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  importDefault(4270).hideActionSheet();
  const obj = importDefault(4270);
  importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(11191, dependencyMap.paths), closure_0);
};
