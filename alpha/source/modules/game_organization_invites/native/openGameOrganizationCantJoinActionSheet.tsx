// Module ID: 13440
// Function ID: 13441
// Name: openGameOrganizationCantJoinActionSheet
// Dependencies: [11504, 5374, 13441, 2118, 2]
// Exports: default

// Module 13440 (openGameOrganizationCantJoinActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11504 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationCantJoinActionSheet.tsx");

export default function openGameOrganizationCantJoinActionSheet(code, reason) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, reason };
  obj.openLazy(asyncRequire(13441, dependencyMap.paths), closure_3, obj2);
};
