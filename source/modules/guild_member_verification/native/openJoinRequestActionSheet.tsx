// Module ID: 15567
// Function ID: 15568
// Name: openJoinRequestActionSheet
// Dependencies: [4253, 15568, 1959, 2]
// Exports: default

// Module 15567 (openJoinRequestActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4253);
  obj = { joinRequest };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15568, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
