// Module ID: 15537
// Function ID: 15538
// Name: openJoinRequestActionSheet
// Dependencies: [4223, 15538, 1959, 2]
// Exports: default

// Module 15537 (openJoinRequestActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4223);
  obj = { joinRequest };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15538, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
