// Module ID: 17951
// Function ID: 17952
// Name: openJoinRequestActionSheet
// Dependencies: [5196, 17952, 2002, 2]
// Exports: default

// Module 17951 (openJoinRequestActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj = { joinRequest };
  const tmp2 = asyncRequire(17952, dependencyMap.paths);
  openLazy(tmp2, "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
