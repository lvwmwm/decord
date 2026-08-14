// Module ID: 15784
// Function ID: 15785
// Name: openJoinRequestActionSheet
// Dependencies: [4310, 15785, 2007, 2]
// Exports: default

// Module 15784 (openJoinRequestActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4310);
  obj = { joinRequest };
  obj.openLazy(require(2007) /* asyncRequireImpl */(15785, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
