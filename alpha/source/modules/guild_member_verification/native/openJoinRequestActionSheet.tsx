// Module ID: 17623
// Function ID: 17624
// Name: openJoinRequestActionSheet
// Dependencies: [5115, 17624, 2000, 2]
// Exports: default

// Module 17623 (openJoinRequestActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj = { joinRequest };
  const tmp2 = asyncRequire(17624, dependencyMap.paths);
  openLazy(tmp2, "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
