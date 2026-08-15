// Module ID: 15834
// Function ID: 15835
// Name: openJoinRequestActionSheet
// Dependencies: [4342, 15835, 2007, 2]
// Exports: default

// Module 15834 (openJoinRequestActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4342);
  obj = { joinRequest };
  obj.openLazy(require(2007) /* asyncRequireImpl */(15835, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
