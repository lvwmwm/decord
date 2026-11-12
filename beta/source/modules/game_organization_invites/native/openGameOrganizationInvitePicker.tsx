// Module ID: 11839
// Function ID: 11840
// Name: openGameOrganizationInvitePicker
// Dependencies: [11536, 5406, 11840, 2118, 2]
// Exports: default

// Module 11839 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11536 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(11840, dependencyMap.paths), closure_3, obj2);
};
