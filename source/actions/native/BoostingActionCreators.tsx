// Module ID: 6710
// Function ID: 6711
// Name: openApplyBoostModal
// Dependencies: [5260, 6711, 2007, 2]
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 6710 (openApplyBoostModal)
const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = importDefault(5260);
  obj = { guildId };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(6711, dependencyMap.paths), obj, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(6711, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  importDefault(5260).popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
