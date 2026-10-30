// Module ID: 11611
// Function ID: 11612
// Name: openGameOrganizationInvitePicker
// Dependencies: [11327, 5253, 11612, 1995, 2]
// Exports: default

// Module 11611 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11327 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(11612, dependencyMap.paths), closure_3, obj2);
};
