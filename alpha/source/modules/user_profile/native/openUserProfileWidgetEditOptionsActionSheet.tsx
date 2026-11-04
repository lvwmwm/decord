// Module ID: 12561
// Function ID: 12562
// Name: openUserProfileWidgetEditOptionsActionSheet
// Dependencies: [5382, 12562, 2123, 2]
// Exports: default

// Module 12561 (openUserProfileWidgetEditOptionsActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const UserProfileWidgetEditOptionsActionSheet = "UserProfileWidgetEditOptionsActionSheet";
const result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileWidgetEditOptionsActionSheet.tsx");

export default function openUserProfileWidgetEditOptionsActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12562, dependencyMap.paths), UserProfileWidgetEditOptionsActionSheet, arg0);
};
export const USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY = "UserProfileWidgetEditOptionsActionSheet";
