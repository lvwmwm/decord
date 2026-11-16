// Module ID: 15260
// Function ID: 15261
// Name: openUserProfileAddTagActionSheet
// Dependencies: [502, 8858, 6127, 8866, 5406, 15261, 2118, 2]
// Exports: default

// Module 15260 (openUserProfileAddTagActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import react_nativeDefault from "react-native" /* 6127 */;
import Constants from "Constants" /* 8858 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8866 */;
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
  obj3.openLazy(asyncRequire(15261, dependencyMap.paths), UserProfileAddTagActionSheet, widgetEdited);
};
export const USER_PROFILE_ADD_TAG_ACTION_SHEET_KEY = "UserProfileAddTagActionSheet";
