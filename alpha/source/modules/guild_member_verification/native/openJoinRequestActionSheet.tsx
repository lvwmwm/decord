// Module ID: 17349
// Function ID: 17350
// Name: openJoinRequestActionSheet
// Dependencies: [5056, 17350, 2000, 2]
// Exports: default

// Module 17349 (openJoinRequestActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj = { joinRequest };
  const tmp2 = asyncRequire(17350, dependencyMap.paths);
  openLazy(tmp2, "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
