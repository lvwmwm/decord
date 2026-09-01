// Module ID: 16166
// Function ID: 16167
// Name: openJoinRequestActionSheet
// Dependencies: [4445, 16167, 2009, 2]
// Exports: default

// Module 16166 (openJoinRequestActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { joinRequest };
  obj.openLazy(asyncRequireImpl(16167, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
