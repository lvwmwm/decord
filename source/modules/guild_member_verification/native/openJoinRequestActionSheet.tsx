// Module ID: 15415
// Function ID: 117386
// Name: openJoinRequestActionSheet
// Dependencies: [4133, 15416, 1935, 2]
// Exports: default

// Module 15415 (openJoinRequestActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4133);
  obj = { joinRequest };
  obj.openLazy(require(1935) /* maybeLoadBundle */(15416, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
