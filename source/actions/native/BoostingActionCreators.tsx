// Module ID: 5394
// Function ID: 5395
// Name: openApplyBoostModal
// Dependencies: [4731, 5395, 2008, 2]
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 5394 (openApplyBoostModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = set.fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = _modDef4731;
  obj = { guildId };
  obj.pushLazy(asyncRequireImpl(5395, dependencyMap.paths), obj, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  _modDef4731.pushLazy(asyncRequireImpl(5395, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  _modDef4731.popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
