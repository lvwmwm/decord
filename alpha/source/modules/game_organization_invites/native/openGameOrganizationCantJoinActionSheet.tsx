// Module ID: 12169
// Function ID: 12170
// Name: openGameOrganizationCantJoinActionSheet
// Dependencies: [11834, 5006, 12170, 2121, 2]
// Exports: default

// Module 12169 (openGameOrganizationCantJoinActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11834 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationCantJoinActionSheet.tsx");

export default function openGameOrganizationCantJoinActionSheet(code, reason) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, reason };
  obj.openLazy(asyncRequire(12170, dependencyMap.paths), closure_3, obj2);
};
