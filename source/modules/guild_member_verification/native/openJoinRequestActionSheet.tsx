// Module ID: 15775
// Function ID: 15776
// Name: openJoinRequestActionSheet
// Dependencies: [4310, 15776, 2007, 2]
// Exports: default

// Module 15775 (openJoinRequestActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4310);
  obj = { joinRequest };
  obj.openLazy(require(2007) /* asyncRequireImpl */(15776, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
