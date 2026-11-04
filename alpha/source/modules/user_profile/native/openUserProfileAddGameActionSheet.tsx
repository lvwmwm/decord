// Module ID: 15172
// Function ID: 15173
// Name: openUserProfileAddGameActionSheet
// Dependencies: [5382, 15173, 2123, 2]
// Exports: default

// Module 15172 (openUserProfileAddGameActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const UserProfileAddGameActionSheet = "UserProfileAddGameActionSheet";
const result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileAddGameActionSheet.tsx");

export default function openUserProfileAddGameActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15173, dependencyMap.paths), UserProfileAddGameActionSheet, arg0);
};
export const USER_PROFILE_ADD_GAME_ACTION_SHEET_KEY = "UserProfileAddGameActionSheet";
