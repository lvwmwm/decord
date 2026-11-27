// Module ID: 12130
// Function ID: 12131
// Name: openGameOrganizationInvitePicker
// Dependencies: [11925, 5257, 12131, 2120, 2]
// Exports: default

// Module 12130 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11925 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(12131, dependencyMap.paths), closure_3, obj2);
};
