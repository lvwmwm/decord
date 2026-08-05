// Module ID: 11141
// Function ID: 11142
// Name: showBanConfirmModal
// Dependencies: [4223, 4460, 11142, 1959, 2]
// Exports: default

// Module 11141 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  importDefault(4223).hideActionSheet();
  const obj = importDefault(4223);
  importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(11142, dependencyMap.paths), closure_0);
};
