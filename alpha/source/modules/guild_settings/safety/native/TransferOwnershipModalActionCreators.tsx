// Module ID: 11453
// Function ID: 11454
// Name: TransferOwnershipModalActionCreators
// Dependencies: [5940, 11454, 1999, 584, 2]

// Module 11453 (TransferOwnershipModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
let obj = {
  open(guild, toUser) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { guild, toUser };
    obj.pushLazy(asyncRequire(11454, dependencyMap.paths), obj2, TRANSFER_OWNERSHIP_MODAL_KEY);
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
