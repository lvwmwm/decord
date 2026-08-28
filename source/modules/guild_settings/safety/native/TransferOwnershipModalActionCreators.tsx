// Module ID: 11350
// Function ID: 11351
// Dependencies: [4689, 11351, 2010, 709, 2]

// Module 11350
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = set.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = _modDef4689;
    obj = { guild, toUser };
    obj.pushLazy(asyncRequireImpl(11351, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    dispatcherDefault.wait(() => {
      callback(table[0]).popWithKey(closure_3);
    });
  }
};
