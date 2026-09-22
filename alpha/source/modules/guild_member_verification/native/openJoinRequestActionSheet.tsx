// Module ID: 16939
// Function ID: 16940
// Name: openJoinRequestActionSheet
// Dependencies: [4724, 16940, 1980, 2]
// Exports: default

// Module 16939 (openJoinRequestActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(16940, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, { joinRequest });
};
