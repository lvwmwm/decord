// Module ID: 10243
// Function ID: 10244
// Name: openUserProfileAddTagActionSheet
// Dependencies: [502, 8069, 5865, 8136, 5127, 10244, 2119, 2]
// Exports: default

// Module 10243 (openUserProfileAddTagActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import react_nativeDefault from "react-native" /* 5865 */;
import Constants from "Constants" /* 8069 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8136 */;
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
  obj3.openLazy(asyncRequire(10244, dependencyMap.paths), UserProfileAddTagActionSheet, widgetEdited);
};
export const USER_PROFILE_ADD_TAG_ACTION_SHEET_KEY = "UserProfileAddTagActionSheet";
