// Module ID: 12467
// Function ID: 12468
// Name: TransferOwnershipModalActionCreators
// Dependencies: [6150, 12468, 2000, 2]

// Module 12467 (TransferOwnershipModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import size from "module_2" /* 2 */;

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
let obj = {
  open(guild, toUser) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { guild, toUser };
    obj.pushLazy(asyncRequire(12468, dependencyMap.paths), obj2, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(TRANSFER_OWNERSHIP_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default obj;
