// Module ID: 5237
// Function ID: 44238
// Name: openApplyBoostModal
// Dependencies: []
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 5237 (openApplyBoostModal)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { guildId };
  obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj, "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY");
};
export const openTransferModal = function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  importDefault(dependencyMap[0]).pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY");
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  importDefault(dependencyMap[0]).popWithKey("PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY");
};
