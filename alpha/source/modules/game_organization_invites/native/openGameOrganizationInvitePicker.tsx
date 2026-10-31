// Module ID: 11647
// Function ID: 11648
// Name: openGameOrganizationInvitePicker
// Dependencies: [11363, 5258, 11648, 1994, 2]
// Exports: default

// Module 11647 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11363 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(11648, dependencyMap.paths), closure_3, obj2);
};
