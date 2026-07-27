// Module ID: 10984
// Function ID: 85407
// Name: showKickConfirmModal
// Dependencies: [4099, 4338, 10985, 1935, 2]
// Exports: default

// Module 10984 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(merged) {
  importDefault(4099).hideActionSheet();
  const obj = importDefault(4099);
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(10985, dependencyMap.paths), merged);
};
