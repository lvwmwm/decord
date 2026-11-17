// Module ID: 10832
// Function ID: 10833
// Name: openUserProfileWidgetEditOptionsActionSheet
// Dependencies: [5546, 10833, 2121, 2]
// Exports: default

// Module 10832 (openUserProfileWidgetEditOptionsActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const UserProfileWidgetEditOptionsActionSheet = "UserProfileWidgetEditOptionsActionSheet";
const result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileWidgetEditOptionsActionSheet.tsx");

export default function openUserProfileWidgetEditOptionsActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10833, dependencyMap.paths), UserProfileWidgetEditOptionsActionSheet, arg0);
};
export const USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY = "UserProfileWidgetEditOptionsActionSheet";
