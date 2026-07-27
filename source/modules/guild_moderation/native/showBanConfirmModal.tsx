// Module ID: 10986
// Function ID: 85412
// Name: showBanConfirmModal
// Dependencies: [4099, 4338, 10987, 1935, 2]
// Exports: default

// Module 10986 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  importDefault(4099).hideActionSheet();
  const obj = importDefault(4099);
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(10987, dependencyMap.paths), merged);
};
