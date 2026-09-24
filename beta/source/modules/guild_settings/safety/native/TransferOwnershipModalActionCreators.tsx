// Module ID: 12011
// Function ID: 12012
// Name: TransferOwnershipModalActionCreators
// Dependencies: [4993, 12012, 1984, 577, 2]

// Module 12011 (TransferOwnershipModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12012, dependencyMap.paths), { guild, toUser }, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    DispatcherDefault.wait(() => {
      ModalActionCreatorsDefault.popWithKey(TRANSFER_OWNERSHIP_MODAL_KEY);
    });
  }
};
