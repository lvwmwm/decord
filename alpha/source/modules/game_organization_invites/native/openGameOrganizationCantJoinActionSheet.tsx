// Module ID: 13969
// Function ID: 13970
// Name: openGameOrganizationCantJoinActionSheet
// Dependencies: [12280, 5489, 13970, 2118, 2]
// Exports: default

// Module 13969 (openGameOrganizationCantJoinActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12280 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationCantJoinActionSheet.tsx");

export default function openGameOrganizationCantJoinActionSheet(code, reason) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, reason };
  obj.openLazy(asyncRequire(13970, dependencyMap.paths), closure_3, obj2);
};
