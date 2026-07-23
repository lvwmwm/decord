// Module ID: 15305
// Function ID: 116728
// Name: openJoinRequestActionSheet
// Dependencies: [4098, 15306, 1934, 2]
// Exports: default

// Module 15305 (openJoinRequestActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4098);
  obj = { joinRequest };
  obj.openLazy(require(1934) /* maybeLoadBundle */(15306, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
