// Module ID: 11311
// Function ID: 11312
// Dependencies: [4572, 11312, 2007, 709, 2]

// Module 11311
const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = importDefault(4572);
    obj = { guild, toUser };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(11312, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    importDefault(709).wait(() => {
      callback(table[0]).popWithKey(closure_3);
    });
  }
};
