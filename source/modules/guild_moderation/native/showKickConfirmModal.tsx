// Module ID: 11022
// Function ID: 85530
// Name: showKickConfirmModal
// Dependencies: [4133, 4372, 11023, 1935, 2]
// Exports: default

// Module 11022 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(merged) {
  importDefault(4133).hideActionSheet();
  const obj = importDefault(4133);
  importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(11023, dependencyMap.paths), merged);
};
