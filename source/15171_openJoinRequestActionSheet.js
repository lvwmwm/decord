// Module ID: 15171
// Function ID: 114457
// Name: openJoinRequestActionSheet
// Dependencies: []
// Exports: default

// Module 15171 (openJoinRequestActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(dependencyMap[0]);
  obj = { joinRequest };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
