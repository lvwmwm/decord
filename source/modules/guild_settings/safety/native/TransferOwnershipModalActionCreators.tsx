// Module ID: 11011
// Function ID: 85469
// Dependencies: [4372, 11012, 1935, 686, 2]

// Module 11011
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = importDefault(4372);
    obj = { guild, toUser };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(11012, dependencyMap.paths), obj, "TRANSFER_OWNERSHIP_MODAL_KEY");
  },
  close() {
    importDefault(686).wait(() => {
      outer1_1(outer1_2[0]).popWithKey("TRANSFER_OWNERSHIP_MODAL_KEY");
    });
  }
};
