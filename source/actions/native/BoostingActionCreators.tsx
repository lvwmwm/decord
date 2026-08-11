// Module ID: 5151
// Function ID: 5152
// Name: openApplyBoostModal
// Dependencies: [4509, 5152, 2007, 2]
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 5151 (openApplyBoostModal)
const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = importDefault(4509);
  obj = { guildId };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(5152, dependencyMap.paths), obj, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(5152, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  importDefault(4509).popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
