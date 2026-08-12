// Module ID: 11303
// Function ID: 11304
// Dependencies: [4549, 11304, 2007, 709, 2]

// Module 11303
const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = importDefault(4549);
    obj = { guild, toUser };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(11304, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    importDefault(709).wait(() => {
      callback(table[0]).popWithKey(closure_3);
    });
  }
};
