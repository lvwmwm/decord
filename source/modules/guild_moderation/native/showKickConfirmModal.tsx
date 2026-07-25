// Module ID: 10983
// Function ID: 85402
// Name: showKickConfirmModal
// Dependencies: [4099, 4338, 10984, 1935, 2]
// Exports: default

// Module 10983 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(merged) {
  importDefault(4099).hideActionSheet();
  const obj = importDefault(4099);
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(10984, dependencyMap.paths), merged);
};
