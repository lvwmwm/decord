// Module ID: 13417
// Function ID: 13418
// Name: openGameOrganizationCantJoinActionSheet
// Dependencies: [11522, 5404, 13418, 2118, 2]
// Exports: default

// Module 13417 (openGameOrganizationCantJoinActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11522 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationCantJoinActionSheet.tsx");

export default function openGameOrganizationCantJoinActionSheet(code, reason) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, reason };
  obj.openLazy(asyncRequire(13418, dependencyMap.paths), closure_3, obj2);
};
