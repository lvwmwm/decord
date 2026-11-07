// Module ID: 11807
// Function ID: 11808
// Name: openGameOrganizationInvitePicker
// Dependencies: [11504, 5374, 11808, 2118, 2]
// Exports: default

// Module 11807 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11504 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(11808, dependencyMap.paths), closure_3, obj2);
};
