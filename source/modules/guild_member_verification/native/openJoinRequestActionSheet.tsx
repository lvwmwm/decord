// Module ID: 15448
// Function ID: 15449
// Name: openJoinRequestActionSheet
// Dependencies: [4157, 15449, 1959, 2]
// Exports: default

// Module 15448 (openJoinRequestActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4157);
  obj = { joinRequest };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15449, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
