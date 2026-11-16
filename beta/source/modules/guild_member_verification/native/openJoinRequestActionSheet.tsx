// Module ID: 19420
// Function ID: 19421
// Name: openJoinRequestActionSheet
// Dependencies: [5542, 19421, 2121, 2]
// Exports: default

// Module 19420 (openJoinRequestActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj = { joinRequest };
  const tmp2 = asyncRequire(19421, dependencyMap.paths);
  openLazy(tmp2, "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
