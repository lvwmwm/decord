// Module ID: 11314
// Function ID: 11315
// Name: openGameOrganizationInvitePicker
// Dependencies: [11030, 5210, 11315, 2002, 2]
// Exports: default

// Module 11314 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11030 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(11315, dependencyMap.paths), closure_3, obj2);
};
