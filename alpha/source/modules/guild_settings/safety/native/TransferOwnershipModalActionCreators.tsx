// Module ID: 12561
// Function ID: 12562
// Name: TransferOwnershipModalActionCreators
// Dependencies: [6190, 12562, 2002, 2]

// Module 12561 (TransferOwnershipModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
let obj = {
  open(guild, toUser) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { guild, toUser };
    obj.pushLazy(asyncRequire(12562, dependencyMap.paths), obj2, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(TRANSFER_OWNERSHIP_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default obj;
