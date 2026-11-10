// Module ID: 11648
// Function ID: 11649
// Name: openGameOrganizationInvitePicker
// Dependencies: [11364, 5258, 11649, 1994, 2]
// Exports: default

// Module 11648 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11364 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(11649, dependencyMap.paths), closure_3, obj2);
};
