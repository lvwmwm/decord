// Module ID: 5103
// Function ID: 5104
// Name: openApplyBoostModal
// Dependencies: [4460, 5104, 1959, 2]
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 5103 (openApplyBoostModal)
const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = importDefault(4460);
  obj = { guildId };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(5104, dependencyMap.paths), obj, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(5104, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  importDefault(4460).popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
