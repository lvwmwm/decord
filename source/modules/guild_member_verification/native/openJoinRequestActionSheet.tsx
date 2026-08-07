// Module ID: 15610
// Function ID: 15611
// Name: openJoinRequestActionSheet
// Dependencies: [4270, 15611, 1988, 2]
// Exports: default

// Module 15610 (openJoinRequestActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4270);
  obj = { joinRequest };
  obj.openLazy(require(1988) /* asyncRequireImpl */(15611, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
