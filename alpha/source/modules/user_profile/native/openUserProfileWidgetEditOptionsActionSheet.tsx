// Module ID: 12037
// Function ID: 12038
// Name: openUserProfileWidgetEditOptionsActionSheet
// Dependencies: [5489, 12038, 2118, 2]
// Exports: default

// Module 12037 (openUserProfileWidgetEditOptionsActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const UserProfileWidgetEditOptionsActionSheet = "UserProfileWidgetEditOptionsActionSheet";
const result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileWidgetEditOptionsActionSheet.tsx");

export default function openUserProfileWidgetEditOptionsActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12038, dependencyMap.paths), UserProfileWidgetEditOptionsActionSheet, arg0);
};
export const USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY = "UserProfileWidgetEditOptionsActionSheet";
