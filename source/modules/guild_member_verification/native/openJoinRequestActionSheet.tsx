// Module ID: 15685
// Function ID: 15686
// Name: openJoinRequestActionSheet
// Dependencies: [4271, 15686, 1988, 2]
// Exports: default

// Module 15685 (openJoinRequestActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4271);
  obj = { joinRequest };
  obj.openLazy(require(1988) /* asyncRequireImpl */(15686, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
