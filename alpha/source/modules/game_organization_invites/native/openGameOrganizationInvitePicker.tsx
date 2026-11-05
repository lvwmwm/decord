// Module ID: 11850
// Function ID: 11851
// Name: openGameOrganizationInvitePicker
// Dependencies: [11560, 5384, 11851, 2123, 2]
// Exports: default

// Module 11850 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11560 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(11851, dependencyMap.paths), closure_3, obj2);
};
