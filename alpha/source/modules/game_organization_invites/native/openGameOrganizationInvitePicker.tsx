// Module ID: 11408
// Function ID: 11409
// Name: openGameOrganizationInvitePicker
// Dependencies: [11122, 5247, 11409, 2000, 2]
// Exports: default

// Module 11408 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11122 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(11409, dependencyMap.paths), closure_3, obj2);
};
