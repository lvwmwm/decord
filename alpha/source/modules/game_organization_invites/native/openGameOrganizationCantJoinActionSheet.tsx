// Module ID: 13965
// Function ID: 13966
// Name: openGameOrganizationCantJoinActionSheet
// Dependencies: [12274, 5489, 13966, 2118, 2]
// Exports: default

// Module 13965 (openGameOrganizationCantJoinActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12274 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationCantJoinActionSheet.tsx");

export default function openGameOrganizationCantJoinActionSheet(code, reason) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, reason };
  obj.openLazy(asyncRequire(13966, dependencyMap.paths), closure_3, obj2);
};
