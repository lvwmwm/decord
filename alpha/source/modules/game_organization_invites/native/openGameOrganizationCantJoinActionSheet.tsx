// Module ID: 12233
// Function ID: 12234
// Name: openGameOrganizationCantJoinActionSheet
// Dependencies: [11896, 5127, 12234, 2119, 2]
// Exports: default

// Module 12233 (openGameOrganizationCantJoinActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11896 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationCantJoinActionSheet.tsx");

export default function openGameOrganizationCantJoinActionSheet(code, reason) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, reason };
  obj.openLazy(asyncRequire(12234, dependencyMap.paths), closure_3, obj2);
};
