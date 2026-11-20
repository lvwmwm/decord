// Module ID: 12564
// Function ID: 12565
// Name: openGameOrganizationInvitePicker
// Dependencies: [12369, 5542, 12565, 2121, 2]
// Exports: default

// Module 12564 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12369 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(12565, dependencyMap.paths), closure_3, obj2);
};
