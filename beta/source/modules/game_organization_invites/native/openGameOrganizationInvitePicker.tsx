// Module ID: 12086
// Function ID: 12087
// Name: openGameOrganizationInvitePicker
// Dependencies: [11901, 5127, 12087, 2119, 2]
// Exports: default

// Module 12086 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11901 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(12087, dependencyMap.paths), closure_3, obj2);
};
