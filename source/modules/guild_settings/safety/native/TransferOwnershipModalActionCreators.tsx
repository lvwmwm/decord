// Module ID: 11016
// Function ID: 85721
// Dependencies: [4337, 11017, 1934, 686, 2]

// Module 11016
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = importDefault(4337);
    obj = { guild, toUser };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(11017, dependencyMap.paths), obj, "TRANSFER_OWNERSHIP_MODAL_KEY");
  },
  close() {
    importDefault(686).wait(() => {
      outer1_1(outer1_2[0]).popWithKey("TRANSFER_OWNERSHIP_MODAL_KEY");
    });
  }
};
