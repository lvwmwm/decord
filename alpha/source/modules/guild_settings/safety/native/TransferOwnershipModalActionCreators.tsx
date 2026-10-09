// Module ID: 11360
// Function ID: 11361
// Name: TransferOwnershipModalActionCreators
// Dependencies: [5941, 11361, 2000, 584, 2]

// Module 11360 (TransferOwnershipModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import size from "module_2" /* 2 */;

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
let obj = {
  open(guild, toUser) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { guild, toUser };
    obj.pushLazy(asyncRequire(11361, dependencyMap.paths), obj2, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(TRANSFER_OWNERSHIP_MODAL_KEY);
    });
  }
};
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default obj;
