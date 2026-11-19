// Module ID: 10120
// Function ID: 10121
// Name: openUserProfileAddTagActionSheet
// Dependencies: [502, 7950, 5744, 8017, 5006, 10121, 2121, 2]
// Exports: default

// Module 10120 (openUserProfileAddTagActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import react_nativeDefault from "react-native" /* 5744 */;
import Constants from "Constants" /* 7950 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8017 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const constants = Constants.TrackUserProfileEditActions;
const UserProfileAddTagActionSheet = "UserProfileAddTagActionSheet";
let result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileAddTagActionSheet.tsx");

export default function openUserProfileAddTagActionSheet(widgetEdited) {
  react_nativeDefault();
  const obj = UserProfileAnalyticsUtils;
  const obj2 = { userId: AuthenticationStore.getId(), action: constants.PRESS_ADD_TAG, widgetEdited: widgetEdited.widgetType };
  const result = obj.trackUserProfileEditAction(obj2);
  const obj3 = ActionSheetActionCreatorsDefault;
  obj3.openLazy(asyncRequire(10121, dependencyMap.paths), UserProfileAddTagActionSheet, widgetEdited);
};
export const USER_PROFILE_ADD_TAG_ACTION_SHEET_KEY = "UserProfileAddTagActionSheet";
