// Module ID: 12281
// Function ID: 12282
// Name: TransferOwnershipModalActionCreators
// Dependencies: [6308, 12282, 2121, 2]

// Module 12281 (TransferOwnershipModalActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import size from "module_2" /* 2 */;

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
let obj = {
  open(guild, toUser) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { guild, toUser };
    obj.pushLazy(asyncRequire(12282, dependencyMap.paths), obj2, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(TRANSFER_OWNERSHIP_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default obj;
