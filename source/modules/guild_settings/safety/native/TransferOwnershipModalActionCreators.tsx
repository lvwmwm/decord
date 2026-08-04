// Module ID: 11156
// Function ID: 11157
// Dependencies: [4490, 11157, 1959, 709, 2]

// Module 11156
const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = importDefault(4490);
    obj = { guild, toUser };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(11157, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    importDefault(709).wait(() => {
      callback(table[0]).popWithKey(closure_3);
    });
  }
};
