// Module ID: 16927
// Function ID: 16928
// Name: openJoinRequestActionSheet
// Dependencies: [4723, 16928, 1980, 2]
// Exports: default

// Module 16927 (openJoinRequestActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(16928, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, { joinRequest });
};
