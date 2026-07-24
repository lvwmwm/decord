// Module ID: 15352
// Function ID: 117050
// Name: openJoinRequestActionSheet
// Dependencies: [4098, 15353, 1934, 2]
// Exports: default

// Module 15352 (openJoinRequestActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4098);
  obj = { joinRequest };
  obj.openLazy(require(1934) /* maybeLoadBundle */(15353, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
