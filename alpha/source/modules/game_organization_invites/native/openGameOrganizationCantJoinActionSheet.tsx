// Module ID: 12180
// Function ID: 12181
// Name: openGameOrganizationCantJoinActionSheet
// Dependencies: [11770, 5131, 12181, 2119, 2]
// Exports: default

// Module 12180 (openGameOrganizationCantJoinActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11770 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationCantJoinActionSheet.tsx");

export default function openGameOrganizationCantJoinActionSheet(code, reason) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { code, reason };
  obj.openLazy(asyncRequire(12181, dependencyMap.paths), closure_3, obj2);
};
