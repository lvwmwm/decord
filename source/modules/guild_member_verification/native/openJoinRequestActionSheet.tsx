// Module ID: 15586
// Function ID: 15587
// Name: openJoinRequestActionSheet
// Dependencies: [4253, 15587, 1988, 2]
// Exports: default

// Module 15586 (openJoinRequestActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4253);
  obj = { joinRequest };
  obj.openLazy(require(1988) /* asyncRequireImpl */(15587, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
