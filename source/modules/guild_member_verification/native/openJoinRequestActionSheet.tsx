// Module ID: 15362
// Function ID: 117178
// Name: openJoinRequestActionSheet
// Dependencies: [4099, 15363, 1935, 2]
// Exports: default

// Module 15362 (openJoinRequestActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4099);
  obj = { joinRequest };
  obj.openLazy(require(1935) /* maybeLoadBundle */(15363, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
