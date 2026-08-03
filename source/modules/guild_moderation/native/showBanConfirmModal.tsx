// Module ID: 11178
// Function ID: 11179
// Name: showBanConfirmModal
// Dependencies: [4223, 4461, 11179, 1959, 2]
// Exports: default

// Module 11178 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  importDefault(4223).hideActionSheet();
  const obj = importDefault(4223);
  importDefault(4461).pushLazy(require(1959) /* asyncRequireImpl */(11179, dependencyMap.paths), closure_0);
};
