// Module ID: 13473
// Function ID: 13474
// Name: openGameOrganizationCantJoinActionSheet
// Dependencies: [11536, 5406, 13474, 2118, 2]
// Exports: default

// Module 13473 (openGameOrganizationCantJoinActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11536 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationCantJoinActionSheet.tsx");

export default function openGameOrganizationCantJoinActionSheet(code, reason) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, reason };
  obj.openLazy(asyncRequire(13474, dependencyMap.paths), closure_3, obj2);
};
