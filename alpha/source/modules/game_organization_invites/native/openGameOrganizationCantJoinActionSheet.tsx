// Module ID: 13442
// Function ID: 13443
// Name: openGameOrganizationCantJoinActionSheet
// Dependencies: [11560, 5384, 13443, 2123, 2]
// Exports: default

// Module 13442 (openGameOrganizationCantJoinActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11560 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationCantJoinActionSheet.tsx");

export default function openGameOrganizationCantJoinActionSheet(code, reason) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, reason };
  obj.openLazy(asyncRequire(13443, dependencyMap.paths), closure_3, obj2);
};
