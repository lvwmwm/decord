// Module ID: 15442
// Function ID: 15443
// Name: openJoinRequestActionSheet
// Dependencies: [4157, 15443, 1959, 2]
// Exports: default

// Module 15442 (openJoinRequestActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4157);
  obj = { joinRequest };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15443, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
