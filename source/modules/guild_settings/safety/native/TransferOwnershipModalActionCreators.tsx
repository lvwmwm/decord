// Module ID: 10978
// Function ID: 85469
// Dependencies: []

// Module 10978
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = importDefault(dependencyMap[0]);
    obj = { guild, toUser };
    obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj, "TRANSFER_OWNERSHIP_MODAL_KEY");
  },
  close() {
    importDefault(dependencyMap[3]).wait(() => {
      callback(closure_2[0]).popWithKey("TRANSFER_OWNERSHIP_MODAL_KEY");
    });
  }
};
