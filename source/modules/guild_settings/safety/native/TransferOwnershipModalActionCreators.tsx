// Module ID: 10973
// Function ID: 85346
// Dependencies: [4338, 10974, 1935, 686, 2]

// Module 10973
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = importDefault(4338);
    obj = { guild, toUser };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(10974, dependencyMap.paths), obj, "TRANSFER_OWNERSHIP_MODAL_KEY");
  },
  close() {
    importDefault(686).wait(() => {
      outer1_1(outer1_2[0]).popWithKey("TRANSFER_OWNERSHIP_MODAL_KEY");
    });
  }
};
