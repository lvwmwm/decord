// Module ID: 4966
// Function ID: 42679
// Name: openApplyBoostModal
// Dependencies: [4337, 4967, 1934, 2]
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 4966 (openApplyBoostModal)
const result = require("maybeLoadBundle").fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = importDefault(4337);
  obj = { guildId };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(4967, dependencyMap.paths), obj, "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY");
};
export const openTransferModal = function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(4967, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY");
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  importDefault(4337).popWithKey("PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY");
};
