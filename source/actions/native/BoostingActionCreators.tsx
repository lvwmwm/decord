// Module ID: 5192
// Function ID: 5193
// Name: openApplyBoostModal
// Dependencies: [4550, 5193, 2007, 2]
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 5192 (openApplyBoostModal)
const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = importDefault(4550);
  obj = { guildId };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(5193, dependencyMap.paths), obj, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(5193, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  importDefault(4550).popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
