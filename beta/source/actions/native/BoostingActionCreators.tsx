// Module ID: 5683
// Function ID: 5684
// Name: actions/BoostingActionCreators
// Dependencies: [4991, 5684, 1980, 2]
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 5683 (actions/BoostingActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import size from "module_2" /* 2 */;

const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = size.fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(5684, dependencyMap.paths), { guildId }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(5684, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  ModalActionCreatorsDefault.popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
