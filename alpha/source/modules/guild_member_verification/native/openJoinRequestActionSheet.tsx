// Module ID: 18225
// Function ID: 18226
// Name: openJoinRequestActionSheet
// Dependencies: [5127, 18226, 2119, 2]
// Exports: default

// Module 18225 (openJoinRequestActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj = { joinRequest };
  const tmp2 = asyncRequire(18226, dependencyMap.paths);
  openLazy(tmp2, "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
