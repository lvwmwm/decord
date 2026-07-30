// Module ID: 11031
// Function ID: 11032
// Dependencies: [4395, 11032, 1959, 709, 2]

// Module 11031
const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = importDefault(4395);
    obj = { guild, toUser };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(11032, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    importDefault(709).wait(() => {
      callback(table[0]).popWithKey(closure_3);
    });
  }
};
