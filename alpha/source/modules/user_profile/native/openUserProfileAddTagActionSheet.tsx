// Module ID: 15178
// Function ID: 15179
// Name: openUserProfileAddTagActionSheet
// Dependencies: [502, 8900, 6101, 8908, 5384, 15179, 2123, 2]
// Exports: default

// Module 15178 (openUserProfileAddTagActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import react_nativeDefault from "react-native" /* 6101 */;
import Constants from "Constants" /* 8900 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8908 */;
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
  obj3.openLazy(asyncRequire(15179, dependencyMap.paths), UserProfileAddTagActionSheet, widgetEdited);
};
export const USER_PROFILE_ADD_TAG_ACTION_SHEET_KEY = "UserProfileAddTagActionSheet";
