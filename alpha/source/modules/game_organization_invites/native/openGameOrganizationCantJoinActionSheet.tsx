// Module ID: 12337
// Function ID: 12338
// Name: openGameOrganizationCantJoinActionSheet
// Dependencies: [11925, 5257, 12338, 2120, 2]
// Exports: default

// Module 12337 (openGameOrganizationCantJoinActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11925 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationCantJoinActionSheet.tsx");

export default function openGameOrganizationCantJoinActionSheet(code, reason) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, reason };
  obj.openLazy(asyncRequire(12338, dependencyMap.paths), closure_3, obj2);
};
