// Module ID: 5133
// Function ID: 5134
// Name: openApplyBoostModal
// Dependencies: [4490, 5134, 1988, 2]
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 5133 (openApplyBoostModal)
const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = importDefault(4490);
  obj = { guildId };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(5134, dependencyMap.paths), obj, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(5134, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  importDefault(4490).popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
