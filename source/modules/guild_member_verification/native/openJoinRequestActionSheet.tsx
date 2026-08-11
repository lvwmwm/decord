// Module ID: 15710
// Function ID: 15711
// Name: openJoinRequestActionSheet
// Dependencies: [4271, 15711, 2007, 2]
// Exports: default

// Module 15710 (openJoinRequestActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4271);
  obj = { joinRequest };
  obj.openLazy(require(2007) /* asyncRequireImpl */(15711, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
