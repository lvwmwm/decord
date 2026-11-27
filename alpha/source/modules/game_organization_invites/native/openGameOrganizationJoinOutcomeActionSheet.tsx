// Module ID: 12355
// Function ID: 12356
// Name: openGameOrganizationJoinOutcomeActionSheet
// Dependencies: [11925, 5257, 12356, 2120, 2]
// Exports: default

// Module 12355 (openGameOrganizationJoinOutcomeActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11925 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeActionSheet.tsx");

export default function openGameOrganizationJoinOutcomeActionSheet(code, result) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, result };
  return obj.openLazy(asyncRequire(12356, dependencyMap.paths), closure_3, obj2);
};
