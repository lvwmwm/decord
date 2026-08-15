// Module ID: 11024
// Function ID: 11025
// Dependencies: [5260, 11025, 2007, 709, 2]

// Module 11024
const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = importDefault(5260);
    obj = { guild, toUser };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(11025, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    importDefault(709).wait(() => {
      callback(table[0]).popWithKey(closure_3);
    });
  }
};
