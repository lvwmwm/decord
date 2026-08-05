// Module ID: 15548
// Function ID: 15549
// Name: openJoinRequestActionSheet
// Dependencies: [4223, 15549, 1959, 2]
// Exports: default

// Module 15548 (openJoinRequestActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4223);
  obj = { joinRequest };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15549, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
