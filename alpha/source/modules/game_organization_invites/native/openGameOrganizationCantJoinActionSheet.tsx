// Module ID: 13455
// Function ID: 13456
// Name: openGameOrganizationCantJoinActionSheet
// Dependencies: [11513, 5376, 13456, 2118, 2]
// Exports: default

// Module 13455 (openGameOrganizationCantJoinActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11513 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationCantJoinActionSheet.tsx");

export default function openGameOrganizationCantJoinActionSheet(code, reason) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, reason };
  obj.openLazy(asyncRequire(13456, dependencyMap.paths), closure_3, obj2);
};
