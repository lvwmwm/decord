// Module ID: 11162
// Function ID: 11163
// Dependencies: [4490, 11163, 1988, 709, 2]

// Module 11162
const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = importDefault(4490);
    obj = { guild, toUser };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(11163, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    importDefault(709).wait(() => {
      callback(table[0]).popWithKey(closure_3);
    });
  }
};
