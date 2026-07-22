// Module ID: 15189
// Function ID: 114558
// Name: openJoinRequestActionSheet
// Dependencies: []
// Exports: default

// Module 15189 (openJoinRequestActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(dependencyMap[0]);
  obj = { joinRequest };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
