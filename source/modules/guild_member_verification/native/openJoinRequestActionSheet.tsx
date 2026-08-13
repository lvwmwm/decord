// Module ID: 15766
// Function ID: 15767
// Name: openJoinRequestActionSheet
// Dependencies: [4310, 15767, 2007, 2]
// Exports: default

// Module 15766 (openJoinRequestActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4310);
  obj = { joinRequest };
  obj.openLazy(require(2007) /* asyncRequireImpl */(15767, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
