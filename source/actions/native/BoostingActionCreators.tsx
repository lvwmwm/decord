// Module ID: 5213
// Function ID: 5214
// Name: openApplyBoostModal
// Dependencies: [4572, 5214, 2007, 2]
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 5213 (openApplyBoostModal)
const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = importDefault(4572);
  obj = { guildId };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(5214, dependencyMap.paths), obj, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(5214, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  importDefault(4572).popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
