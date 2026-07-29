// Module ID: 5023
// Function ID: 5024
// Name: openApplyBoostModal
// Dependencies: [4395, 5024, 1959, 2]
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 5023 (openApplyBoostModal)
const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = importDefault(4395);
  obj = { guildId };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(5024, dependencyMap.paths), obj, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(5024, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  importDefault(4395).popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
