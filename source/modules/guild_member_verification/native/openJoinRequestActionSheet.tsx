// Module ID: 16014
// Function ID: 16015
// Name: openJoinRequestActionSheet
// Dependencies: [4411, 16015, 2009, 2]
// Exports: default

// Module 16014 (openJoinRequestActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;

const result = set.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { joinRequest };
  obj.openLazy(asyncRequireImpl(16015, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
