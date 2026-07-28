// Module ID: 11024
// Function ID: 85535
// Name: showBanConfirmModal
// Dependencies: [4133, 4372, 11025, 1935, 2]
// Exports: default

// Module 11024 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  importDefault(4133).hideActionSheet();
  const obj = importDefault(4133);
  importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(11025, dependencyMap.paths), merged);
};
