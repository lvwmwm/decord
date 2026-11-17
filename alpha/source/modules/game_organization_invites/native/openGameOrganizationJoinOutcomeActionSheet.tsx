// Module ID: 12917
// Function ID: 12918
// Name: openGameOrganizationJoinOutcomeActionSheet
// Dependencies: [12573, 5546, 12918, 2121, 2]
// Exports: default

// Module 12917 (openGameOrganizationJoinOutcomeActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12573 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeActionSheet.tsx");

export default function openGameOrganizationJoinOutcomeActionSheet(code, result) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, result };
  return obj.openLazy(asyncRequire(12918, dependencyMap.paths), closure_3, obj2);
};
