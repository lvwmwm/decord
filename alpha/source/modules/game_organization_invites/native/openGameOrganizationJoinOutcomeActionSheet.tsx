// Module ID: 12252
// Function ID: 12253
// Name: openGameOrganizationJoinOutcomeActionSheet
// Dependencies: [11896, 5127, 12253, 2119, 2]
// Exports: default

// Module 12252 (openGameOrganizationJoinOutcomeActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11896 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeActionSheet.tsx");

export default function openGameOrganizationJoinOutcomeActionSheet(code, result) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, result };
  return obj.openLazy(asyncRequire(12253, dependencyMap.paths), closure_3, obj2);
};
