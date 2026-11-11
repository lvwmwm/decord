// Module ID: 12472
// Function ID: 12473
// Name: openGameOrganizationInvitePicker
// Dependencies: [12280, 5489, 12473, 2118, 2]
// Exports: default

// Module 12472 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12280 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(12473, dependencyMap.paths), closure_3, obj2);
};
