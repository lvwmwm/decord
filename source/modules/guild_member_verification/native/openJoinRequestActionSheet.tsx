// Module ID: 16578
// Function ID: 16579
// Name: openJoinRequestActionSheet
// Dependencies: [4527, 16579, 1896, 2]
// Exports: default

// Module 16578 (openJoinRequestActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { joinRequest };
  obj.openLazy(asyncRequireImpl(16579, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
