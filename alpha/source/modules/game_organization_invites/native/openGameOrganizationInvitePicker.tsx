// Module ID: 11841
// Function ID: 11842
// Name: openGameOrganizationInvitePicker
// Dependencies: [11551, 5382, 11842, 2123, 2]
// Exports: default

// Module 11841 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11551 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(11842, dependencyMap.paths), closure_3, obj2);
};
