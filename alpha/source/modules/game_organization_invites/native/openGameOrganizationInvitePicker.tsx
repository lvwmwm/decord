// Module ID: 11973
// Function ID: 11974
// Name: openGameOrganizationInvitePicker
// Dependencies: [11770, 5131, 11974, 2119, 2]
// Exports: default

// Module 11973 (openGameOrganizationInvitePicker)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11770 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { userId };
  obj.openLazy(asyncRequire(11974, dependencyMap.paths), closure_3, obj2);
};
