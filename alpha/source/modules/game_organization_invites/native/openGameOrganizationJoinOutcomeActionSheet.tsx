// Module ID: 12188
// Function ID: 12189
// Name: openGameOrganizationJoinOutcomeActionSheet
// Dependencies: [11834, 5006, 12189, 2121, 2]
// Exports: default

// Module 12188 (openGameOrganizationJoinOutcomeActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11834 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeActionSheet.tsx");

export default function openGameOrganizationJoinOutcomeActionSheet(code, result) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, result };
  return obj.openLazy(asyncRequire(12189, dependencyMap.paths), closure_3, obj2);
};
