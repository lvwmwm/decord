// Module ID: 12122
// Function ID: 12123
// Name: openGameOrganizationInvitePicker
// Dependencies: [11917, 5257, 12123, 2120, 2]
// Exports: default

// Module 12122 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11917 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(12123, dependencyMap.paths), closure_3, obj2);
};
