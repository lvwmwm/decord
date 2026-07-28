// Module ID: 5001
// Function ID: 42807
// Name: openApplyBoostModal
// Dependencies: [4372, 5002, 1935, 2]
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 5001 (openApplyBoostModal)
const result = require("maybeLoadBundle").fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = importDefault(4372);
  obj = { guildId };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(5002, dependencyMap.paths), obj, "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY");
};
export const openTransferModal = function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(5002, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY");
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  importDefault(4372).popWithKey("PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY");
};
