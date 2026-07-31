// Module ID: 15470
// Function ID: 15471
// Name: openJoinRequestActionSheet
// Dependencies: [4161, 15471, 1959, 2]
// Exports: default

// Module 15470 (openJoinRequestActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4161);
  obj = { joinRequest };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15471, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
