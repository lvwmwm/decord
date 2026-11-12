// Module ID: 12466
// Function ID: 12467
// Name: openGameOrganizationInvitePicker
// Dependencies: [12274, 5489, 12467, 2118, 2]
// Exports: default

// Module 12466 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12274 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(12467, dependencyMap.paths), closure_3, obj2);
};
