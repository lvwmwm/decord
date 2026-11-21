// Module ID: 12375
// Function ID: 12376
// Name: TransferOwnershipModalActionCreators
// Dependencies: [6429, 12376, 2119, 2]

// Module 12375 (TransferOwnershipModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
let obj = {
  open(guild, toUser) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { guild, toUser };
    obj.pushLazy(asyncRequire(12376, dependencyMap.paths), obj2, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(TRANSFER_OWNERSHIP_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default obj;
