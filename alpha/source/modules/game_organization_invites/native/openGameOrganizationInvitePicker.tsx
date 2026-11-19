// Module ID: 12019
// Function ID: 12020
// Name: openGameOrganizationInvitePicker
// Dependencies: [11834, 5006, 12020, 2121, 2]
// Exports: default

// Module 12019 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11834 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(12020, dependencyMap.paths), closure_3, obj2);
};
