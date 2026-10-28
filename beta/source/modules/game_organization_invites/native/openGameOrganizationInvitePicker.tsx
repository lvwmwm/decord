// Module ID: 11345
// Function ID: 11346
// Name: openGameOrganizationInvitePicker
// Dependencies: [11061, 5242, 11346, 2002, 2]
// Exports: default

// Module 11345 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11061 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(11346, dependencyMap.paths), closure_3, obj2);
};
