// Module ID: 16830
// Function ID: 16831
// Name: openJoinRequestActionSheet
// Dependencies: [5054, 16831, 1999, 2]
// Exports: default

// Module 16830 (openJoinRequestActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj = { joinRequest };
  const tmp2 = asyncRequire(16831, dependencyMap.paths);
  openLazy(tmp2, "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
