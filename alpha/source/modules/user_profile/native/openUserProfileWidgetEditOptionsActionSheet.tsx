// Module ID: 12031
// Function ID: 12032
// Name: openUserProfileWidgetEditOptionsActionSheet
// Dependencies: [5489, 12032, 2118, 2]
// Exports: default

// Module 12031 (openUserProfileWidgetEditOptionsActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const UserProfileWidgetEditOptionsActionSheet = "UserProfileWidgetEditOptionsActionSheet";
const result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileWidgetEditOptionsActionSheet.tsx");

export default function openUserProfileWidgetEditOptionsActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12032, dependencyMap.paths), UserProfileWidgetEditOptionsActionSheet, arg0);
};
export const USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY = "UserProfileWidgetEditOptionsActionSheet";
