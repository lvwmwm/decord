// Module ID: 10210
// Function ID: 10211
// Name: openUserProfileAddGameActionSheet
// Dependencies: [5127, 10211, 2119, 2]
// Exports: default

// Module 10210 (openUserProfileAddGameActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const UserProfileAddGameActionSheet = "UserProfileAddGameActionSheet";
const result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileAddGameActionSheet.tsx");

export default function openUserProfileAddGameActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10211, dependencyMap.paths), UserProfileAddGameActionSheet, arg0);
};
export const USER_PROFILE_ADD_GAME_ACTION_SHEET_KEY = "UserProfileAddGameActionSheet";
