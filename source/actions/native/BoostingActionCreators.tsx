// Module ID: 4967
// Function ID: 42692
// Name: openApplyBoostModal
// Dependencies: [4338, 4968, 1935, 2]
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 4967 (openApplyBoostModal)
const result = require("maybeLoadBundle").fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = importDefault(4338);
  obj = { guildId };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(4968, dependencyMap.paths), obj, "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY");
};
export const openTransferModal = function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(4968, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY");
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  importDefault(4338).popWithKey("PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY");
};
