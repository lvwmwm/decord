// Module ID: 6645
// Function ID: 6646
// Name: BoostingActionCreators
// Dependencies: [6620, 6646, 2002, 2]
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 6645 (BoostingActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6620 */;
import size from "module_2" /* 2 */;

const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = size.fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId };
  obj.pushLazy(asyncRequire(6646, dependencyMap.paths), obj2, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(6646, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
