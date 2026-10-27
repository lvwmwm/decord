// Module ID: 11317
// Function ID: 11318
// Name: openGameOrganizationInvitePicker
// Dependencies: [11033, 5211, 11318, 1999, 2]
// Exports: default

// Module 11317 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11033 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(11318, dependencyMap.paths), closure_3, obj2);
};
