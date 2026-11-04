// Module ID: 6903
// Function ID: 6904
// Name: BoostingActionCreators
// Dependencies: [6879, 6904, 2123, 2]
// Exports: closeApplyBoostModal, openApplyBoostModal, openTransferModal

// Module 6903 (BoostingActionCreators)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = size.fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export function openApplyBoostModal(guildId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId };
  obj.pushLazy(asyncRequire(6904, dependencyMap.paths), obj2, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
}
export function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(6904, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
}
export function closeApplyBoostModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
}
